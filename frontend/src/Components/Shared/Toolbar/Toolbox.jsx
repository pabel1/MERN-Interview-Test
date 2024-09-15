import React, { useState } from "react";
import { FaRegStar } from "react-icons/fa6";
import { GoArrowRight, GoCircle, GoDiamond, GoPencil } from "react-icons/go";
import { GrPowerReset } from "react-icons/gr";
import { HiOutlineMinus } from "react-icons/hi";
import { IoTriangleOutline } from "react-icons/io5";
import { PiRectangle, PiTextT } from "react-icons/pi";
import ToolbarButton from "./ToolbarButton";

const Toolbox = ({ onModeChange, onColorChange, onReset }) => {
  const [selectedMode, setSelectedMode] = useState("rectangle");

  const handleModeChange = (mode) => {
    onModeChange(mode);
    setSelectedMode(mode);
  };

  const buttons = [
    { title: "Rectangle", icon: <PiRectangle />, mode: "rectangle" },
    { title: "Diamond", icon: <GoDiamond />, mode: "diamond" },
    { title: "Circle", icon: <GoCircle />, mode: "circle" },
    { title: "Triangle", icon: <IoTriangleOutline />, mode: "triangle" },
    { title: "Star", icon: <FaRegStar />, mode: "star" },
    { title: "Line", icon: <HiOutlineMinus />, mode: "line" },
    { title: "Arrow", icon: <GoArrowRight />, mode: "arrow" },
    { title: "Pencil", icon: <GoPencil />, mode: "pencil" },
    { title: "Text", icon: <PiTextT />, mode: "text" },
  ];

  return (
    <div className=" flex flex-col items-center gap-1 border p-4 rounded-xl shadow-sm mb-4">
      {buttons.map((button, index) => (
        <ToolbarButton
          key={index}
          title={button.title}
          icon={button.icon}
          onClick={() => handleModeChange(button.mode)}
          isSelected={button.mode === selectedMode}
        />
      ))}
      <input
        className="w-8 outline-none border-none bg-transparent cursor-pointer"
        type="color"
        onChange={(e) => onColorChange(e.target.value)}
      />
      <ToolbarButton
        title="Undo"
        icon={<GrPowerReset />}
        onClick={onReset}
        isSelected={false}
      />
    </div>
  );
};

export default Toolbox;
