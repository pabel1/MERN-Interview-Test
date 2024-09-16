import React from "react";
import { useNavigate } from "react-router-dom";
import DrawingPreview from "../Board/DrawingPreview";

const DrawingCard = ({ drawing }) => {
  console.log(drawing);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/draw/${drawing?._id}`);
  };
  return (
    <div
      className="w-full border border-gray-200 rounded-lg cursor-pointer"
      onClick={handleClick}
    >
      <DrawingPreview drawing={drawing} />
    </div>
  );
};

export default DrawingCard;
