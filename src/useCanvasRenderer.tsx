import { useRef, useEffect, useCallback } from "react";

export const useCanvasRenderer = (
  render: (context2D: CanvasRenderingContext2D, timeDelta: number) => void
) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

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

      if (context2D) render(context2D, deltaTime);

      renderRequestId = requestAnimationFrame(renderFrame);
    };
    requestAnimationFrame(renderFrame);

    // Cleanup
    return () => {
      cancelAnimationFrame(renderRequestId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [render, resizeCanvas]);

  return canvasRef;
};
