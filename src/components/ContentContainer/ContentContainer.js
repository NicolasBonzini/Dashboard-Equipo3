import React from "react";
import "../ContentContainer/contentContainer.css";

export default function contentContainer({ children }) {
  return <main className="contentContainer">{children}</main>;
}
