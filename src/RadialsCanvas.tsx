import { useCallback } from "react";
import styled from "styled-components";
import vec2 from "vec2";
import { Curve } from "./Curve";
import { renderFrame } from "./renderFrame";
import { useCanvasRenderer } from "./useCanvasRenderer";

const StyledCanvas = styled.canvas`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: #222222;
  overflow-y: none;
`;

export const RadialsCanvas = () => {
  const canvasRef = useCanvasRenderer(renderFrame);
  return <StyledCanvas id="radials-canvas" ref={canvasRef} />;
};
