import React, { useContext } from "react";
//FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//ReactRouter
import { NavLink } from "react-router-dom";
//Font Awesome Icons
import {
  faBoxOpen,
  faHouse,
  faStoreAlt,
  faSun,
  faMoon,
} from "@fortawesome/free-solid-svg-icons";
//Context theme
import { ThemeContext } from "../../context/ThemeContext";
import ButtonContext from "../../context/ButtonContext";
//Switch css
import "../Switch/switch.css";

function LinksNavegationSideBar() {
  const { theme } = useContext(ThemeContext);

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
      <li className="dark-mode-sidebar">
        <ButtonContext>
          <FontAwesomeIcon
            icon={theme == "" ? faMoon : faSun}
            className="icon"
          />
          Tema {theme == "dark" ? "Claro" : "Oscuro"}
        </ButtonContext>

        <input type="checkbox" id="toggle_checkbox" />
        <ButtonContext>
          <label htmlFor="toggle_checkbox">
            <div id="star">
              <div className="star" id="star-1">
                ★
              </div>
              <div className="star" id="star-2">
                ★
              </div>
            </div>
            <div id="moon"></div>
          </label>
        </ButtonContext>
      </li>
    </>
  );
}

export default LinksNavegationSideBar;
