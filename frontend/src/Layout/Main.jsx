import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../Components/Navbar/Topbar.jsx";
const Main = () => {
  return (
    <section className="flex h-screen bg-gradient-to-r text from-track-white  to-gray-200 text-">
      <div className="w-full ">
        <Topbar />
        <div className="">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Main;
