//React
import { useContext, useRef } from "react";
//Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
//Components
import NavigateLink from "../NavigateLink/NavigateLink";

function LinksNavegationSideBar() {
  const links = [
    {
      id: 1,
      route: "/",
      icon: faHouse,
      text: "Inicio",
    },
    {
      id: 2,
      route: "/products",
      icon: faBoxOpen,
      text: "Productos",
    },
    {
      id: 3,
      route: "/stores",
      icon: faStoreAlt,
      text: "Tiendas",
    },
  ];

  const { theme } = useContext(ThemeContext);
  const switchInput = useRef(null);

  return (
    <>
    {/* Con un map recorro el objeto links, colocando cada link en el sidebar */}
      {links.map((link) => {
        return <NavigateLink key={link.id} {...link} />;
      })}

      <li className="dark-mode-sidebar">
        <ButtonContext>
          <FontAwesomeIcon
            icon={theme === "" ? faMoon : faSun}
            className="icon"
          />
          Tema {theme === "dark" ? "Claro" : "Oscuro"}
        </ButtonContext>
        <input
          ref={switchInput}
          onChange={() => {}}
          checked={theme !== "dark"}
          type="checkbox"
          id="toggle_checkbox"
        />
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
