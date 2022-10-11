import React from "react";
import "../../components/MainContainer/mainContainer.css";

export default function MainContainer({ children }) {
  return <main className="main_container">{children}</main>;
}
