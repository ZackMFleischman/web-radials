import { useCallback } from "react";
import styled from "styled-components";
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
    },
    []
  );

  const canvasRef = useCanvasRenderer(renderFrame);

  return <StyledCanvas id="radials-canvas" ref={canvasRef} />;
};
