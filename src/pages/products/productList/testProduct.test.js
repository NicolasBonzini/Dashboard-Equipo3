import {
  findAllByText,
  logRoles,
  render,
  screen,
  act,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import ProductList from "./ProductList";
import products from "./mockProducts";
import getProducts from "../../../utils/getProducts";

jest.mock("../../../utils/getProducts");

describe.skip("searchbar input tests", () => {
  beforeEach(async () => {
    getProducts.mockResolvedValue(products);

    await act(async () => {
      await render(
        <MemoryRouter>
          <ProductList />
        </MemoryRouter>
      );
    });
  });

  test("Ver si el boton se renderiza", () => {
    const searchInput = screen.getByPlaceholderText(/Buscar productos/i);
  });

  test("Ver si filtra por titulo", async () => {
    const searchInput = screen.queryByPlaceholderText(/Buscar productos/i);

    userEvent.type(searchInput, "iPhone");
    const productsFilter = products.filter((x) =>
      x.title.toLowerCase().includes("iPhone")
    );
    const cards = await screen.findAllByRole("heading");

    productsFilter.forEach((x) => expect(cards).toHaveTextContent(x.title));
  });

  test.only("Ver si filtra por Categoria", async () => {
    const selects = await screen.findAllByRole("select");
    console.log(selects[0]);

    //const productsFilter = products.filter(x => x.category = 'smartphones')
    // const cards = await screen.findAllByRole('heading')

    //productsFilter.forEach(x => expect(cards).toHaveTextContent(x.title))
    //cards.forEach(x => logRoles(x))
  });
});
