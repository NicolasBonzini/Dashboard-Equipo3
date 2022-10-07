import React from "react";
import "../assets/styles/sidebar.css";
//ReactRouter
import { NavLink } from "react-router-dom";
//ReactComponents
import Avatar from "./Avatar";
import Brand from "./Brand";
import LinksNavegationSideBar from "./LinksNavegationSideBar";

function Sidebar() {

  return (
    <div className="sidebar close-sidebar">
      {/* Sidebar */}
      <div className="left-sidebar">
        {/* Top Navbar */}
        <nav className="top-navbar">
          <Brand />
          <nav className="nav-list">
            <ul>
              <LinksNavegationSideBar />
            </ul>
          </nav>
        </nav>
        {/* Bottom Navbar */}
        <nav className="bottom-navbar">
          <NavLink to="/profile">
            <Avatar />
          </NavLink>
        </nav>
      </div>
      {/* Space to click in and close sidebar */}
      <div className="right-sidebar"></div>
    </div>
  );
}

export default Sidebar;
