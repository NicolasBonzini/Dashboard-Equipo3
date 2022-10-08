import React from "react";
//FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//ReactRouter
import { NavLink } from "react-router-dom";
//Font Awesome Icons
import {
  faBoxOpen,
  faHouse,
  faStoreAlt,
} from "@fortawesome/free-solid-svg-icons";

function LinksNavegationSideBar() {
  return (
    <>
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
      <li>
          <FontAwesomeIcon icon={faStoreAlt} className="icon" />
          Tiendas
      </li>
    </>
  );
}

export default LinksNavegationSideBar;
