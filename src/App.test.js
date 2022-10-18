import { prettyDOM, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { logRoles } from "@testing-library/react";
import { BrowserRouter, MemoryRouter } from "react-router-dom";
import App from "./App";

const renderWithRouter = (ui, { route = "/" } = {}) => {
  window.history.pushState({}, "Test page", route);

  return {
    user: userEvent.setup(),
    ...render(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>),
  };
};

describe("Testeo de toda la navegacion", () => {
  //RESPUESTA AL ERROR DEL PROMPT
  //   //https://stackoverflow.com/questions/55088482/jest-not-implemented-window-alert
  // const jsdomPrompt = global.prompt;
  // global.prompt = () => {};

  test("Al dar click sobre el boton de inicio la app debe navegar a la ruta de inicio", async () => {
    const { user } = renderWithRouter(<App />);

    const currentRoute = screen.getByTestId("location-display");
    const homeButton = screen.getByRole("link", { name: /inicio/i });

    await user.click(homeButton);

    expect(currentRoute).toHaveTextContent("/");
  });

  test("Al dar click sobre el boton del perfil la app debe navegar a la pagina profile", async () => {
    const { user } = renderWithRouter(<App />);

    const currentRoute = screen.getByTestId("location-display");
    const profileButton = screen.getByRole("link", { name: /profilepic/i });

    await user.click(profileButton);

    expect(currentRoute).toHaveTextContent("/profile");
  });

  test("Al dar click sobre el boton de productos la app debe navegar a la ruta products", async () => {
    const { user } = renderWithRouter(<App />);

    const currentRoute = screen.getByTestId("location-display");
    const productsButton = screen.getByRole("link", { name: /productos/i });

    await user.click(productsButton);

    expect(currentRoute).toHaveTextContent("/products");
  });

  test("Al dar click sobre el boton de tiendas la app debe navegar a la ruta de stores", async () => {
    const { user } = renderWithRouter(<App />);

    const currentRoute = screen.getByTestId("location-display");
    const storesButton = screen.getByRole("link", { name: /tiendas/i });

    await user.click(storesButton);

    expect(currentRoute).toHaveTextContent("/stores");
  });

  test("Al dar click para acceder a una ruta no implementada da el mensaje de error404", async () => {
    const { user } = renderWithRouter(<App />);

    const profileButton = screen.getByRole("link", { name: /profilepic/i });

    await user.click(profileButton);

    const errorMessage = screen.getByText(/no encontramos la pagina/i);
    expect(errorMessage).toBeInTheDocument();

    const storesButton = screen.getByRole("link", { name: /tiendas/i });

    await user.click(storesButton);

    expect(errorMessage).toBeInTheDocument();
  });

  // global.prompt = jsdomPrompt;
});
