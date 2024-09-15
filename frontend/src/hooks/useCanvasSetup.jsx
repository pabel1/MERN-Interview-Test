import { useEffect } from "react";

export const useCanvasSetup = (
  canvasRef,
  staticCanvasRef,
  contextRef,
  staticContextRef,
  color
) => {
  useEffect(() => {
    const canvas = canvasRef.current;
    const staticCanvas = staticCanvasRef.current;
    if (!canvas || !staticCanvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    staticCanvas.width = window.innerWidth;
    staticCanvas.height = window.innerHeight;

    const context = canvas.getContext("2d");
    const staticContext = staticCanvas.getContext("2d");

    if (context && staticContext) {
      context.scale(2, 2);
      staticContext.scale(1, 1);
      context.lineCap = "round";
      staticContext.lineCap = "round";
      context.lineWidth = 1;
      staticContext.lineWidth = 1;
      contextRef.current = context;
      staticContextRef.current = staticContext;
    }
  }, [canvasRef, staticCanvasRef, contextRef, staticContextRef]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const staticCanvas = staticCanvasRef.current;
    if (!canvas || !staticCanvas) return;

    const context = canvas.getContext("2d");
    const staticContext = staticCanvas.getContext("2d");

    if (context && staticContext) {
      context.strokeStyle = color;
      staticContext.strokeStyle = color;
    }
  }, [canvasRef, staticCanvasRef, color]);
};
