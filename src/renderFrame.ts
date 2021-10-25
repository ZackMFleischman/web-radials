import vec2 from "vec2";
import { Curve } from "./Curve";
import { State } from "./State";


const curve = new Curve(
  new vec2(0, 0),
  new vec2(90, 130),
  new vec2(150, -20),
  new vec2(190, 110)
);

export type RenderFrame = (canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D,  state: State, timeDelta: number) => void;

export const renderFrame: RenderFrame = (canvas, ctx,  state, timeDelta) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const randomColor = Math.random() > 0.5 ? "#ff8080" : "#0099b0";
  ctx.strokeStyle = randomColor;
  ctx.lineWidth = 2;

  for (let i = 0; i < state.numRadials; ++i) {
    const rotation = ((Math.PI * 2) / state.numRadials) * i;
    curve.render(
      ctx,
      rotation,
      new vec2(window.innerWidth / 2.0, window.innerHeight / 2.0)
    );
  }
};