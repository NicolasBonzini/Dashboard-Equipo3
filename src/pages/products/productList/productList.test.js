import { render, screen, act, logRoles } from "@testing-library/react";
import { useParams, BrowserRouter, MemoryRouter } from "react-router-dom";
import mockedProducts from "../../../__mocks__/products/products";
import getProducts from "../../../utils/getProducts";
import ProductList from "./ProductList";

jest.mock("../../../utils/getProducts");

describe("This component must list products and allow redirection to edit and create product", () => {
  beforeEach(async () => {
    getProducts.mockResolvedValue(mockedProducts);

    await act(async () => {
      await render(
        <MemoryRouter>
          <ProductList />
        </MemoryRouter>
      );
    });
  });

  it("Render all products", async () => {
    //const titles = await screen.findAllByRole("heading");

    mockedProducts.forEach((product) => {
      //expect(titles[0]).toHaveTextContent(product.title);
      screen.getByText(product.title);
    });

    //expect(titles).toHaveLength(mockedProducts.length);

    /*  mockedProducts.forEach(product => {
        expect(screen.getByRole('headings')).toHaveTextContent(product.title);
      }); */

    /* const products = screen. */
    /*  expect(products).toHaveBeenCalledTimes(1); */
  });

  it("Render props correctly", () => {
    mockedProducts.forEach((prod) => {
      expect(screen.getByText(prod.title));
      /*       expect(screen.getByRole("heading", { level: 4 })).toHaveTextContent(prod.title);
      expect(screen.getByRole("img")).toHaveAttribute("src", prod.images[0]);
     */
    
    });
  });
});
