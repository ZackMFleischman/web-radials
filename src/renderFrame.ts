import vec2 from "vec2";
import { State } from "./State";

export type RenderFrame = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D,  state: State, timeDelta: number) => void;

export const renderFrame: RenderFrame = (canvas, ctx,  state, timeDelta) => {
  updateState(state, timeDelta);
  const center = new vec2(window.innerWidth / 2.0, window.innerHeight / 2.0);

  // Setup next frame
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = "white";
  ctx.lineWidth = state.curveWidth;

  drawSurroundingCircle(ctx, state, center);

  const curve = state.getCurve();
  for (let i = 0; i < state.numRadials; ++i) {
    if (state.skipEveryNthRadial > 0 && i % (state.skipEveryNthRadial+1) <= state.numberOfRadialsToSkip-1) continue;

    const rotation = (((Math.PI * 2) / state.numRadials) * i) + state.spin;
    curve.render(ctx, rotation, center, state.colorPalette[i % state.colorPalette.length], state.showControlLines, state.scale);
  }
};

const drawSurroundingCircle = (ctx: CanvasRenderingContext2D, state: State, center: vec2) => {
  ctx.strokeStyle = state.colorPalette[0];
  const radius = state.maxCurveSize * state.scale;
  ctx.moveTo(center.x + radius, center.y);
  ctx.arc(center.x, center.y, radius, 0, Math.PI*2);
  ctx.stroke();
}

const updateState = (state: State, timeDelta: number) => {
  if (!timeDelta) return;

  if (state.c1x >= state.maxControlPointSize) 
    state.c1xVelocity = -Math.abs(state.c1xVelocity);
  if (state.c1x <= -state.maxControlPointSize) 
    state.c1xVelocity = Math.abs(state.c1xVelocity);

  if (state.c1y >= state.maxControlPointSize) 
    state.c1yVelocity = -Math.abs(state.c1yVelocity);
  if (state.c1y <= -state.maxControlPointSize) 
    state.c1yVelocity = Math.abs(state.c1yVelocity);

  if (state.c2x >= state.maxControlPointSize) 
    state.c2xVelocity = -Math.abs(state.c2xVelocity);
  if (state.c2x <= -state.maxControlPointSize) 
    state.c2xVelocity = Math.abs(state.c2xVelocity);

  if (state.c2y >= state.maxControlPointSize) 
    state.c2yVelocity = -Math.abs(state.c2yVelocity);
  if (state.c2y <= -state.maxControlPointSize) 
    state.c2yVelocity = Math.abs(state.c2yVelocity);

  state.setC1x(state.c1x + state.c1xVelocity*(timeDelta/10));
  state.setC1y(state.c1y + state.c1yVelocity*(timeDelta/10));
  state.setC2x(state.c2x + state.c2xVelocity*(timeDelta/10));
  state.setC2y(state.c2y + state.c2yVelocity*(timeDelta/10));

  state.spin = state.spin + state.spinVelocity*timeDelta/500 % (Math.PI*2.0)

  if (state.scale >= 1+state.maxScaleDelta) 
    state.scaleVelocity = -Math.abs(state.scaleVelocity);
  if (state.scale <= 1-state.maxScaleDelta) 
    state.scaleVelocity = Math.abs(state.scaleVelocity);
  state.scale = state.scale + state.scaleVelocity*timeDelta/3500;

  state.renderControls();
}