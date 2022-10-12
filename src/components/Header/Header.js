//React
import React from "react";
//Componentes
import "../../components/Header/header.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header({ children }) {
  return (
    <header className="header">
      <BurgerMenu />
      <div className="headerContent">{children}</div>
    </header>
  );
}

export default Header;
