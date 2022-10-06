import React from "react";
import "../assets/styles/sidebar.css";
import logo from "../assets/images/MiEcommerce.png";
//FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxOpen,
  faHouse,
  faStore,
  faStoreAlt,
} from "@fortawesome/free-solid-svg-icons";
//ReactRouter
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <nav className="top-navbar">
        <img src={logo} className="logo" alt="logo" />
        <nav className="nav-list">
          <ul>
            <li>
              <FontAwesomeIcon icon={faHouse} />
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <FontAwesomeIcon icon={faBoxOpen} />
              <NavLink to="/products">
              Productos
              </NavLink>
            </li>
            <li>
              <FontAwesomeIcon icon={faStoreAlt} />
              <NavLink to="/error404">Tiendas</NavLink>
            </li>
          </ul>
        </nav>
      </nav>
      <nav className="bottom-navbar"></nav>
    </div>
  );
}

export default Sidebar;
