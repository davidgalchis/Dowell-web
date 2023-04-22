import React from "react";
import { Outlet } from "react-router";
import "./layout.css";
import Nav from "../nav/Nav";
import Footer from "../footer/Footer";

const RootLayout = () => {
  return (
    <div className="layout_container">
      <Nav />

      <div className="layout_content">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
