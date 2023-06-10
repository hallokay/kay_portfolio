import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar, Footer } from "./index";


const Layout = () => {
  return (
    <>
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
