import vec2 from "vec2";
import { State } from "./State";

export type RenderFrame = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D,  state: State, timeDelta: number) => void;

export const renderFrame: RenderFrame = (canvas, ctx,  state, timeDelta) => {
  updateState(state, timeDelta);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const randomColor = Math.random() > 0.5 ? "#ff8080" : "#0099b0";
  ctx.strokeStyle = randomColor;
  ctx.lineWidth = 2;

  const curve = state.getCurve();

  for (let i = 0; i < state.numRadials; ++i) {
    const rotation = ((Math.PI * 2) / state.numRadials) * i;
    curve.render(
      ctx,
      rotation,
      new vec2(window.innerWidth / 2.0, window.innerHeight / 2.0)
    );
  }
};

const updateState = (state: State, timeDelta: number) => {
  if (!timeDelta) return;

  if (state.c1x >= state.maxCurveSize || state.c1x <= -state.maxCurveSize) state.c1xVelocity = -state.c1xVelocity;
  if (state.c1y >= state.maxCurveSize || state.c1y <= -state.maxCurveSize) state.c1yVelocity = -state.c1yVelocity;
  if (state.c2x >= state.maxCurveSize || state.c2x <= -state.maxCurveSize) state.c2xVelocity = -state.c2xVelocity;
  if (state.c2y >= state.maxCurveSize || state.c2y <= -state.maxCurveSize) state.c2yVelocity = -state.c2yVelocity;
  state.setC1x(state.c1x + state.c1xVelocity*timeDelta);
  state.setC1y(state.c1y + state.c1yVelocity*timeDelta);
  state.setC2x(state.c2x + state.c2xVelocity*timeDelta);
  state.setC2y(state.c2y + state.c2yVelocity*timeDelta);

  state.renderControls();
}