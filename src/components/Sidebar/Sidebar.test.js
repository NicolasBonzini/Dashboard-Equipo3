import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router-dom";
import App from "../../App";
import userEvent from "@testing-library/user-event";
import { ToggleProvider } from "../../context/ToggleContext";
import mockedProducts from "../../__mocks__/products/products";
import getProducts from "../../utils/getProducts";

jest.mock("../../utils/getProducts");

describe("Test window width", () => {
  const jsdomPrompt = window.prompt;

  beforeEach(() => {
    getProducts.mockResolvedValue(mockedProducts);
    window.prompt = () => {};
  });

  afterEach(() => {
    window.prompt = jsdomPrompt;
  });
  //Cuando la pantalla cambia de resolucion se añaden y quitan clases
  test("Test sidebar when window width resize", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <MemoryRouter>
        <ToggleProvider>
          <App />
        </ToggleProvider>
      </MemoryRouter>
    );

    const showSidebarDesktop = screen.getByTestId(/show-sidebar/i);
    expect(showSidebarDesktop.dataset.testid).toMatch(/show-sidebar/i);
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

    const closeSidebarMobile = screen.getByTestId(/close-sidebar/i);
    expect(closeSidebarMobile.dataset.testid).toMatch(/close-sidebar/i);
    expect(window.innerWidth).toBe(500);
  });

  //Despliego el sidebar y al clickear fuera de el se esconde.
  test("Test sidebar close when click out of sidebar", async () => {
    const user = userEvent.setup();

    const { container } = render(
      <MemoryRouter>
        <ToggleProvider>
          <App />
        </ToggleProvider>
      </MemoryRouter>
    );

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

    const buttonWithToggleFunction = screen.getByRole("button", {
      name: "menuButton",
    });

    await user.click(buttonWithToggleFunction);

    const buttonThatCloseSidebar = screen.getByRole("button", {
      name: "closeSidebar",
    });

    const showSidebarDesktop = screen.getByTestId(/show-sidebar/i);
    expect(showSidebarDesktop.dataset.testid).toMatch(/show-sidebar/i);

    await user.click(buttonThatCloseSidebar);

    const closeSidebarMobile = screen.getByTestId(/close-sidebar/i);
    expect(showSidebarDesktop.dataset.testid).toMatch(/close-sidebar/i);
  });
});
