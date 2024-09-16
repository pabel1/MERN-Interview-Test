import { Menu } from "@headlessui/react";
import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

const DrawingMenu = ({ onOption1Click, onOption2Click }) => {
  return (
    <Menu>
      <Menu.Button className="p-2 hover:bg-gray-200 rounded-full">
        <HiOutlineDotsVertical size={24} className="text-gray-500" />
      </Menu.Button>
      <Menu.Items className="absolute right-0 mt-2 w-32 origin-top-right bg-white border border-gray-200 rounded-md shadow-lg outline-none z-10">
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? "bg-gray-100" : ""
              } w-full px-4 py-2 text-left text-sm text-gray-700`}
              onClick={(e) => {
                e.stopPropagation();
                onOption1Click();
              }}
            >
              Edit
            </button>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <button
              className={`${
                active ? "bg-gray-100" : ""
              } w-full px-4 py-2 text-left text-sm text-gray-700`}
              onClick={(e) => {
                e.stopPropagation();
                onOption2Click();
              }}
            >
              Delete
            </button>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
};

export default DrawingMenu;
