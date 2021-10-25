import { useRef, useEffect, useCallback, useContext } from "react";
import { RenderFrame } from "./renderFrame";
import { StateContext } from "./State";

export const useCanvasRenderer = (render: RenderFrame) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const state = useContext(StateContext);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }, []);

  useEffect(() => {
    let renderRequestId: number;
    let startTime: number | undefined;
    window.addEventListener("resize", resizeCanvas, false);
    resizeCanvas();

    const renderFrame = (timestamp: number) => {
      const canvas = canvasRef.current;
      const context2D = canvas?.getContext("2d");

      if (startTime === undefined) startTime = timestamp;
      const deltaTime = timestamp - startTime;
      startTime = timestamp;

      if (canvas && context2D) render(canvas, context2D, state, deltaTime);

      renderRequestId = requestAnimationFrame(renderFrame);
    };
    requestAnimationFrame(renderFrame);

    // Cleanup
    return () => {
      cancelAnimationFrame(renderRequestId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [render, state, resizeCanvas]);

  return canvasRef;
};
