import React from "react";
import "../../components/Header/header.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

function Header({ children }) {
  return (
    <header className="header">
      {/* <i className="fa-solid fa-bars"></i> */}
      <BurgerMenu />
      <div className="headerContent">{children}</div>
    </header>
  );
}

export default Header;
