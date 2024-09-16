import React, { useEffect, useRef } from "react";
import {
  drawArrow,
  drawCircle,
  drawDiamond,
  drawLine,
  drawPencil,
  drawRectangle,
  drawStar,
  drawTriangle,
  renderDynamicText,
} from "../../../Utility/DrawingUtilities";

const DrawingPreview = ({ drawing = { elements: [] } }) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const { elements = [] } = drawing;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const context = canvas.getContext("2d");
    if (context) {
      context.scale(2, 2); // Adjust scaling for high-DPI displays
      context.lineCap = "round";
      context.lineWidth = 1;
      contextRef.current = context; // Store context for drawing
    }
  }, []);

  useEffect(() => {
    if (elements.length && contextRef.current) {
      const context = contextRef.current;

      // Clear the canvas before redrawing
      context.clearRect(
        0,
        0,
        canvasRef.current.width,
        canvasRef.current.height
      );

      // Iterate over each element to draw
      elements.forEach((element) => {
        const { type, color, thickness, content, coordinates } = element;
        const startPoint = { current: coordinates[0][0] }; // Start point based on element data
        const endPoint = coordinates[0][1] || {}; // Optional end point for shapes

        const params = {
          x: endPoint.x,
          y: endPoint.y,
          contextRef,
          startPoint,
          shouldClear: false, // Set to false, as we are managing clearRect manually
        };

        // Set context properties
        context.strokeStyle = color;
        context.lineWidth = thickness;

        // Handle different drawing types
        switch (type) {
          case "rectangle":
            drawRectangle(params);
            break;
          case "circle":
            drawCircle(params);
            break;
          case "line":
            drawLine(params);
            break;
          case "arrow":
            drawArrow(params);
            break;
          case "diamond":
            drawDiamond(params);
            break;
          case "triangle":
            drawTriangle(params);
            break;
          case "star":
            drawStar(params);
            break;
          case "pencil":
            drawPencil({ x: endPoint.x, y: endPoint.y, contextRef });
            break;
          case "text":
            renderDynamicText({
              x: startPoint.current.x,
              y: startPoint.current.y,
              text: content,
              color,
              contextRef,
            });
            break;
          default:
            break;
        }
      });
    }
  }, [elements]);

  return (
    <div className="w-full">
      <canvas ref={canvasRef} className="w-full" />
    </div>
  );
};

export default DrawingPreview;
