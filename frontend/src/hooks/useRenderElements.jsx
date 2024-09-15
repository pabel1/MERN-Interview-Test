import { useEffect } from "react";
import {
  drawArrow,
  drawCircle,
  drawDiamond,
  drawLine,
  drawPencil,
  drawRectangle,
  renderDynamicText,
} from "../utilities/DrawingUtilities.js";

export const useRenderElements = (elements, contextRef) => {
  useEffect(() => {
    if (!elements.length) return;

    elements.forEach((element) => {
      const { type, properties } = element;
      const { coordinates, color, thickness, content } = properties || {};

      if (contextRef.current) {
        contextRef.current.strokeStyle = color;
        contextRef.current.lineWidth = thickness;
      }

      coordinates.forEach((coordPair) => {
        const params = {
          x: coordPair[1]?.x,
          y: coordPair[1]?.y,
          contextRef,
          startPoint: { current: coordPair[0] },
          shouldClear: false,
        };

        switch (type) {
          case "rectangle":
            drawRectangle(params);
            break;
          case "diamond":
            drawDiamond(params);
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
          case "pencil":
            drawPencil(params);
            break;
          case "text":
            renderDynamicText({ ...params, text: content, color });
            break;
          default:
            break;
        }
      });
    });
  }, [elements, contextRef]);
};
