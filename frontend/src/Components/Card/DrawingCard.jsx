import React from "react";
import DrawingPreview from "../Board/DrawingPreview";

const DrawingCard = ({ drawing }) => {
  return (
    <div className=" border border-gray-200 p-4">
      <DrawingPreview drawing={drawing} />
    </div>
  );
};

export default DrawingCard;
