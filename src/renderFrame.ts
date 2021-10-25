import vec2 from "vec2";
import { State } from "./State";

export type RenderFrame = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D,  state: State, timeDelta: number) => void;

export const renderFrame: RenderFrame = (canvas, ctx,  state, timeDelta) => {
  updateState(state, timeDelta);
  const center = new vec2(window.innerWidth / 2.0, window.innerHeight / 2.0);

  // Setup next frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "white";
  ctx.lineWidth = 2;

  drawSurroundingCircle(ctx, state, center);

  const curve = state.getCurve();
  for (let i = 0; i < state.numRadials; ++i) {
    if (state.skipEveryNthRadial > 0 && i % (state.skipEveryNthRadial+1) === 0) continue;

    const rotation = ((Math.PI * 2) / state.numRadials) * i;
    curve.render(ctx, rotation, center);
  }
};

const drawSurroundingCircle = (ctx: CanvasRenderingContext2D, state: State, center: vec2) => {
  ctx.moveTo(center.x + state.maxCurveSize, center.y);
  ctx.arc(center.x, center.y, state.maxCurveSize, 0, Math.PI*2);
  ctx.stroke();
}

const updateState = (state: State, timeDelta: number) => {
  if (!timeDelta) return;

  if (state.c1x >= state.maxCurveSize || state.c1x <= -state.maxCurveSize) state.c1xVelocity = -state.c1xVelocity;
  if (state.c1y >= state.maxCurveSize || state.c1y <= -state.maxCurveSize) state.c1yVelocity = -state.c1yVelocity;
  if (state.c2x >= state.maxCurveSize || state.c2x <= -state.maxCurveSize) state.c2xVelocity = -state.c2xVelocity;
  if (state.c2y >= state.maxCurveSize || state.c2y <= -state.maxCurveSize) state.c2yVelocity = -state.c2yVelocity;
  state.setC1x(state.c1x + state.c1xVelocity*(timeDelta/10));
  state.setC1y(state.c1y + state.c1yVelocity*(timeDelta/10));
  state.setC2x(state.c2x + state.c2xVelocity*(timeDelta/10));
  state.setC2y(state.c2y + state.c2yVelocity*(timeDelta/10));

  state.renderControls();
}