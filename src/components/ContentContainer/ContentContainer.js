import React from "react";
//Css
import "../ContentContainer/contentContainer.css";

export default function contentContainer({ children }) {
  return <main className="contentContainer">{children}</main>;
}
