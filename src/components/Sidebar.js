import React from "react";
import "../assets/styles/sidebar.css";
//Cookies
import Cookies from "universal-cookie";
//FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faHouse,
  faStoreAlt,
} from "@fortawesome/free-solid-svg-icons";
//ReactRouter
import { NavLink } from "react-router-dom";
//ReactComponents
import Avatar from "./Avatar";
import Brand from "./Brand";
import ButtonContext from "../context/ButtonContext";

const cookies = new Cookies()

function Sidebar() {
  function handlerDarkMode(){
    cookies.get('darkMode') == 'dark' ? 
      cookies.set('darkMode', ' ', {path: '/'}) :
      cookies.set('darkMode', 'dark', {path: '/'}) 
  }
  return (
    <div className="sidebar">
      {/* Sidebar */}
      <div className="left-sidebar">
        {/* Top Navbar */}
        <nav className="top-navbar">
          <Brand />
          <nav className="nav-list">
            <ul>
              <NavLink to="/">
                <li>
                  <FontAwesomeIcon icon={faHouse} className="icon" />
                  Inicio
                </li>
              </NavLink>
              <NavLink to="/products">
                <li>
                  <FontAwesomeIcon icon={faBoxOpen} className="icon" />
                  Productos
                </li>
              </NavLink>
              <NavLink to="/stores">
                <li>
                  <FontAwesomeIcon icon={faStoreAlt} className="icon" />
                  Tiendas
                </li>
              </NavLink>
            </ul>
          </nav>
        </nav>
        {/* Bottom Navbar */}
        <nav className="bottom-navbar">
        <ButtonContext onclick={handlerDarkMode} />

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
