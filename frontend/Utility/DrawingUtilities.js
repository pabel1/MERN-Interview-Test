const drawRectangle = ({
  x,
  y,
  contextRef,
  startPoint,
  shouldClear = true,
}) => {
  if (!startPoint.current || !contextRef.current) return [];
  const { x: startX, y: startY } = startPoint.current;
  shouldClear &&
    contextRef.current.clearRect(
      0,
      0,
      contextRef.current.canvas.width,
      contextRef.current.canvas.height
    );
  contextRef.current.strokeRect(startX, startY, x - startX, y - startY);
  return [
    { x: startX, y: startY },
    { x, y },
  ];
};

const drawDiamond = ({ x, y, contextRef, startPoint, shouldClear = true }) => {
  if (!startPoint.current || !contextRef.current) return [];
  const { x: startX, y: startY } = startPoint.current;
  const width = x - startX;
  const height = y - startY;

  shouldClear &&
    contextRef.current.clearRect(
      0,
      0,
      contextRef.current.canvas.width,
      contextRef.current.canvas.height
    );

  contextRef.current.beginPath();
  contextRef.current.moveTo(startX + width / 2, startY);
  contextRef.current.lineTo(x, startY + height / 2);
  contextRef.current.lineTo(startX + width / 2, y);
  contextRef.current.lineTo(startX, startY + height / 2);
  contextRef.current.closePath();
  contextRef.current.stroke();
  return [
    { x: startX, y: startY },
    { x, y },
  ];
};

const drawCircle = ({ x, y, contextRef, startPoint, shouldClear = true }) => {
  if (!startPoint.current || !contextRef.current) return [];
  const { x: startX, y: startY } = startPoint.current;
  const radius = Math.sqrt(Math.pow(x - startX, 2) + Math.pow(y - startY, 2));

  shouldClear &&
    contextRef.current.clearRect(
      0,
      0,
      contextRef.current.canvas.width,
      contextRef.current.canvas.height
    );

  contextRef.current.beginPath();
  contextRef.current.arc(startX, startY, radius, 0, 2 * Math.PI);
  contextRef.current.stroke();
  return [
    { x: startX, y: startY },
    { x, y },
  ];
};

const drawLine = ({ x, y, contextRef, startPoint, shouldClear = true }) => {
  if (!startPoint.current || !contextRef.current) return [];
  const { x: startX, y: startY } = startPoint.current;
  shouldClear &&
    contextRef.current.clearRect(
      0,
      0,
      contextRef.current.canvas.width,
      contextRef.current.canvas.height
    );
  contextRef.current.beginPath();
  contextRef.current.moveTo(startX, startY);
  contextRef.current.lineTo(x, y);
  contextRef.current.stroke();
  contextRef.current.closePath();
  return [
    { x: startX, y: startY },
    { x, y },
  ];
};

const drawArrow = ({ x, y, contextRef, startPoint, shouldClear = true }) => {
  if (!startPoint.current || !contextRef.current) return [];
  const { x: startX, y: startY } = startPoint.current;

  shouldClear &&
    contextRef.current.clearRect(
      0,
      0,
      contextRef.current.canvas.width,
      contextRef.current.canvas.height
    );

  const headlen = 10; // length of head in pixels
  const angle = Math.atan2(y - startY, x - startX);

  contextRef.current.beginPath();
  contextRef.current.moveTo(startX, startY);
  contextRef.current.lineTo(x, y);
  contextRef.current.lineTo(
    x - headlen * Math.cos(angle - Math.PI / 6),
    y - headlen * Math.sin(angle - Math.PI / 6)
  );
  contextRef.current.moveTo(x, y);
  contextRef.current.lineTo(
    x - headlen * Math.cos(angle + Math.PI / 6),
    y - headlen * Math.sin(angle + Math.PI / 6)
  );
  contextRef.current.stroke();
  return [
    { x: startX, y: startY },
    { x, y },
  ];
};

const drawPencil = ({ x, y, contextRef }) => {
  if (!contextRef.current) return [];
  contextRef.current.lineTo(x, y);
  contextRef.current.stroke();

  return [
    { x: 0, y: 0 },
    { x, y },
  ];
};

const renderDynamicText = ({ x, y, text, color, contextRef }) => {
  if (!contextRef.current) return [];
  contextRef.current.clearRect(
    0,
    0,
    contextRef.current.canvas.width,
    contextRef.current.canvas.height
  );
  contextRef.current.fillStyle = color || "";
  contextRef.current.font = "10px Arial";
  contextRef.current.fillText(text, x, y);

  return [
    { x: 0, y: 0 },
    { x, y },
  ];
};

const drawTriangle = ({ x, y, contextRef, startPoint, shouldClear = true }) => {
  if (!startPoint.current || !contextRef.current) return [];
  const { x: startX, y: startY } = startPoint.current;

  shouldClear &&
    contextRef.current.clearRect(
      0,
      0,
      contextRef.current.canvas.width,
      contextRef.current.canvas.height
    );

  contextRef.current.beginPath();
  contextRef.current.moveTo(startX, startY);
  contextRef.current.lineTo(x, y);
  contextRef.current.lineTo(startX - (x - startX), y);
  contextRef.current.closePath();
  contextRef.current.stroke();

  return [
    { x: startX, y: startY },
    { x, y },
  ];
};

const drawStar = ({ x, y, contextRef, startPoint, shouldClear = true }) => {
  if (!startPoint.current || !contextRef.current) return [];
  const { x: startX, y: startY } = startPoint.current;
  const outerRadius = Math.sqrt(
    Math.pow(x - startX, 2) + Math.pow(y - startY, 2)
  );
  const innerRadius = outerRadius / 2;

  shouldClear &&
    contextRef.current.clearRect(
      0,
      0,
      contextRef.current.canvas.width,
      contextRef.current.canvas.height
    );

  contextRef.current.beginPath();
  for (let i = 0; i < 10; i++) {
    const radius = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = (i * Math.PI) / 5;
    const xPoint = startX + radius * Math.sin(angle);
    const yPoint = startY + radius * Math.cos(angle);
    if (i === 0) {
      contextRef.current.moveTo(xPoint, yPoint);
    } else {
      contextRef.current.lineTo(xPoint, yPoint);
    }
  }
  contextRef.current.closePath();
  contextRef.current.stroke();

  return [
    { x: startX, y: startY },
    { x, y },
  ];
};

// Export all drawing functions
export {
  drawArrow,
  drawCircle,
  drawDiamond,
  drawLine,
  drawPencil,
  drawRectangle,
  drawStar,
  drawTriangle,
  renderDynamicText,
};
