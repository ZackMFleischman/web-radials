import { useRef, useEffect, useCallback } from "react";
import { RenderFrame } from "./renderFrame";
import { State } from "./State";

export const useCanvasRenderer = (render: RenderFrame, state: State) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const newMaxCurveSize =
        (Math.min(canvas.width, canvas.height) * state.windowSizeProportion) /
        2;
      state.setMaxCurveSize(newMaxCurveSize);
    }
  }, [state]);

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
