import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "./index";

const Layout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
};

export default Layout;
