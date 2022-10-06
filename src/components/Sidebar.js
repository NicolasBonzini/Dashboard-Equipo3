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
    <div className="sidebar dark">
      <nav className="top-navbar">
        <img src={logo} className="logo" alt="logo" />
        <nav className="nav-list">
          <ul>
            <NavLink to="/">
              <li>
                <FontAwesomeIcon icon={faHouse} className="icon"/>
                Inicio
              </li>
            </NavLink>

            <NavLink to="/products">
              <li>
                <FontAwesomeIcon icon={faBoxOpen} className="icon" />
                Productos
              </li>
            </NavLink>

            <NavLink to="/error404">
              <li>
                <FontAwesomeIcon icon={faStoreAlt} className="icon"/>
                Tiendas
              </li>
            </NavLink>
          </ul>
        </nav>
      </nav>
      <nav className="bottom-navbar"></nav>
    </div>
  );
}

export default Sidebar;
