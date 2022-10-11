import React from "react";
import "../ContentContainer/ContentContainer.css";

export default function contentContainer({ children }) {
  return <main className="contentContainer">{children}</main>;
}
