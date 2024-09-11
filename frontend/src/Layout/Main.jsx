import React from "react";
import { Outlet } from "react-router-dom";
import Topbar from "../Components/Navbar/Topbar.jsx";
const Main = () => {
  return (
    <section className="flex h-screen bg-gradient-to-r from-white to-rose-50">
      <div className="w-full ">
        <Topbar />
        <div className="container">
          <Outlet />
        </div>
      </div>
    </section>
  );
};

export default Main;
