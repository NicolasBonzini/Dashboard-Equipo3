import { useState, createContext } from "react";

export const ToggleContext = createContext(false);

export const ToggleProvider = ({ children }) => {
  const [toggle, setToggle] = useState(false);

  const value = {
    toggle,
    toggleSidebar: () => setToggle((prevValue) => !prevValue),
  };

  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  );
};
