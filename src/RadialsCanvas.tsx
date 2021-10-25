import { useCallback } from "react";
import styled from "styled-components";
import vec2 from "vec2";
import { Curve } from "./Curve";
import { useCanvasRenderer } from "./useCanvasRenderer";

const StyledCanvas = styled.canvas`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: #222222;
  overflow-y: none;
`;

export const RadialsCanvas = () => {
  const renderFrame = useCallback(
    (ctx: CanvasRenderingContext2D, timeDelta: number) => {
      console.log(`context2D: ${ctx}, timeDelta: ${timeDelta}`);

      const randomColor = Math.random() > 0.5 ? "#ff8080" : "#0099b0";
      ctx.fillStyle = randomColor;
      ctx.fillRect(100, 50, 100, 17);

      ctx.strokeStyle = randomColor;
      ctx.lineWidth = 2;

      // ctx.moveTo(30, 30);
      // ctx.bezierCurveTo(120, 160, 180, 10, 220, 140);
      const curve = new Curve(
        new vec2(30, 30),
        new vec2(120, 160),
        new vec2(180, 10),
        new vec2(220, 140)
      );
      curve.render(ctx);
    },
    []
  );

  const canvasRef = useCanvasRenderer(renderFrame);

  return <StyledCanvas id="radials-canvas" ref={canvasRef} />;
};
