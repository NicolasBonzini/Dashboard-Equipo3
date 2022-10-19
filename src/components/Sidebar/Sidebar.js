//React
import { useState, useEffect, useContext } from "react";
import "../Sidebar/sidebar.css";
//ReactRouter
import { NavLink } from "react-router-dom";
//ReactComponents
import Avatar from "../Avatar/Avatar";
import Brand from "../Brand/Brand";
import LinksNavegationSideBar from "../LinksNavegationSideBar/LinksNavegationSideBar";
//Context
import { ToggleContext } from "../../context/ToggleContext";

function Sidebar() {
  const { toggle, toggleSidebar } = useContext(ToggleContext);
  //GUARDO EL LARGO DE LA RESOLUCION DE PANTALLA.
  const [windowSize, setWindowSize] = useState(getWindowSize());
  //OBTENGO EL LARGO DE LA RESOLUCION DE PANTALLA
  function getWindowSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }
  //EN EL RENDERIZADO INICIAL, AGREGO UN DETECTOR DE EVENTOS
  //A WINDOW. EL EVENTO DE CAMBIO DE TAMANIO SE ACTIVARA
  //CUANDO EL TAMANIO DE LA VENTANA CAMBIE.
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener("resize", handleWindowResize);
    //AL DESMONTARSE EL COMPONENTE, ELIMINO EL DETECTOR
    //DE EVENTOS.
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div
      data-testid={`sidebar ${
        windowSize.innerWidth > 1024
          ? "show-sidebar dark-desktop"
          : " dark-mobile"
      } ${
        windowSize.innerWidth < 1024 && !toggle
          ? "close-sidebar"
          : "show-sidebar"
      }`}
      className={`sidebar ${
        windowSize.innerWidth > 1024
          ? "show-sidebar dark-desktop"
          : " dark-mobile"
      } ${
        windowSize.innerWidth < 1024 && !toggle
          ? "close-sidebar"
          : "show-sidebar"
      }`}
    >
      {/* Sidebar */}
      <div className="left-sidebar">
        {/* Top Navbar */}
        <nav className="top-navbar">
          {/* Logo */}
          <Brand />
          <nav className="nav-list">
            <ul>
              {/* Links de navegacion */}
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
      <div className={`right-sidebar `} onClick={() => toggleSidebar()}></div>
    </div>
  );
}

export default Sidebar;
