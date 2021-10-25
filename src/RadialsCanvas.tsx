import styled from "styled-components";
import { renderFrame } from "./renderFrame";
import { State } from "./State";
import { useCanvasRenderer } from "./useCanvasRenderer";

const StyledCanvas = styled.canvas`
  position: absolute;
  height: 100vh;
  width: 100vw;
  background-color: #222222;
  overflow-y: none;
`;

export const RadialsCanvas: React.FC<{ state: State }> = ({ state }) => {
  const canvasRef = useCanvasRenderer(renderFrame, state);
  return <StyledCanvas id="radials-canvas" ref={canvasRef} />;
};
