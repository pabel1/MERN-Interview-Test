// drawingHelpers.js

export const startDrawingHelper = (
  e,
  contextRef,
  drawingMode,
  startPoint,
  isDrawing
) => {
  const { offsetX, offsetY } = e.nativeEvent;
  if (contextRef.current && drawingMode !== "text") {
    contextRef.current.beginPath();
  }
  startPoint.current = { x: offsetX / 2, y: offsetY / 2 };
  isDrawing.current = true;
};

export const drawHelper = (
  e,
  isDrawing,
  contextRef,
  drawingMode,
  startPoint,
  text,
  color
) => {
  if (!isDrawing.current || !contextRef.current) return;
  const { offsetX, offsetY } = e.nativeEvent;
  const params = {
    x: offsetX / 2,
    y: offsetY / 2,
    contextRef,
    startPoint,
    text,
    color,
  };

  switch (drawingMode) {
    case "rectangle":
      return drawRectangle(params);
    case "diamond":
      return drawDiamond(params);
    case "circle":
      return drawCircle(params);
    case "triangle":
      return drawTriangle(params);
    case "star":
      return drawStar(params);
    case "line":
      return drawLine(params);
    case "arrow":
      return drawArrow(params);
    case "pencil":
      return drawPencil(params);
    case "text":
      return renderDynamicText(params);
    default:
      return [];
  }
};

export const endDrawingHelper = (
  elements,
  drawingMode,
  contextRef,
  staticContextRef,
  canvasRef,
  staticCanvasRef,
  setElements,
  newPath,
  setText,
  text
) => {
  if (
    contextRef.current &&
    staticContextRef.current &&
    canvasRef.current &&
    staticCanvasRef.current
  ) {
    staticContextRef.current.drawImage(canvasRef.current, 0, 0);
    contextRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    if (newPath.length) {
      const existingElementIndex = elements.findIndex(
        (element) => element.type === drawingMode
      );
      if (existingElementIndex !== -1) {
        const newElements = [...elements];
        newElements[existingElementIndex].properties.coordinates.push(newPath);
        setElements([...newElements]);
      } else {
        const newElement = {
          type: drawingMode,
          properties: {
            coordinates: [newPath],
            color: contextRef.current.strokeStyle,
            thickness: contextRef.current.lineWidth,
            content: text,
          },
        };
        setElements([...elements, newElement]);
      }
    }
  }
  isDrawing.current = false;
  startPoint.current = null;
  newPath = [];
  text && setText("");
};

export const clearContextsHelper = (
  contextRef,
  staticContextRef,
  canvasRef,
  staticCanvasRef
) => {
  if (contextRef.current && staticContextRef.current) {
    contextRef.current.clearRect(
      0,
      0,
      canvasRef.current.width,
      canvasRef.current.height
    );
    staticContextRef.current.clearRect(
      0,
      0,
      staticCanvasRef.current.width,
      staticCanvasRef.current.height
    );
  }
};
