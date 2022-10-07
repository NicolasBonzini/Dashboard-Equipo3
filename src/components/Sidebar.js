import { useState, useEffect } from "react";
import "../assets/styles/sidebar.css";
//ReactRouter
import { NavLink } from "react-router-dom";
//ReactComponents
import Avatar from "./Avatar";
import Brand from "./Brand";
import LinksNavegationSideBar from "./LinksNavegationSideBar";

function Sidebar() {
  //GUARDO EL LARGO DE LA RESOLUCION DE PANTALLA
  const [windowSize, setWindowSize] = useState(getWindowSize());
  //OBTENGO EL LARGO DE LA RESOLUCION DE PANTALLA
  function getWindowSize() {
    const { innerWidth } = window;
    return { innerWidth };
  }
  //EN EL RENDERIZADO INICIAL, AGREGO UN DETECTOR DE EVENTOS
  //A WINDOW. EL EVENTO DE CAMBIO DE TAMANIO SE ACTIVARA 
  //CUANDO EL TAMANIO DE LA VENTANA CAMBIE
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <div className={`sidebar ${windowSize.innerWidth > 1024 ? "show-sidebar" : "close-sidebar"}`}>
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
        {windowSize.innerWidth}
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
