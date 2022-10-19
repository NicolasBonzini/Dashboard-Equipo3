import { logRoles, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import App from "../../App";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Sidebar from "./Sidebar";

describe("Test window width", () => {
  const jsdomPrompt = window.prompt;

  beforeEach(() => {
    window.prompt = () => {};
  });

  afterEach(() => {
    window.prompt = jsdomPrompt;
  });

  it("test the width", async () => {
    const { container } = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const showSidebarDesktop = screen.getByTestId(/show-sidebar/i);
    expect(window.innerWidth).toBe(1024);

    //Defino el ancho de pantalla a 500
    await act(async () => {
      Object.defineProperty(window, "innerWidth", {
        writable: true,
        configurable: true,
        value: 500,
      });

      window.dispatchEvent(new Event("resize"));
    });

    expect(window.innerWidth).toBe(500);
    const closeSidebarDesktop = screen.getByTestId(/close-sidebar/i);
  });
});
