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
  if (state.c1x >= 250 || state.c1x <= -250) state.c1xVelocity = -state.c1xVelocity;
  state.setC1x(state.c1x + state.c1xVelocity*timeDelta);

  state.renderControls();
}