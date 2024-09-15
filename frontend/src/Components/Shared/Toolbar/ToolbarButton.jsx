import React from "react";

const ToolbarButton = ({ title, icon, onClick, isSelected }) => (
  <button
    title={title}
    onClick={onClick}
    className={`w-full text-lg focus:outline-none focus:border-none hover:bg-red-100 p-4 rounded-lg ${
      isSelected ? "bg-red-200 hover:bg-red-200" : ""
    }`}
  >
    {icon}
  </button>
);

export default ToolbarButton;
