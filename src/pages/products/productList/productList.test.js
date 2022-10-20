import {
  render,
  screen,
  act,
  getByRole,
  logRoles,
} from "@testing-library/react";
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

  test("Render all products", async () => {
    mockedProducts.forEach((product) => {
      screen.getByText(product.title);
      /* Finding product.title in the document means the test passed. Expect assertion is not necessary.  */
    });
  });

  test("Correctly renders prop: props.id", async () => {
    const items = screen.getAllByRole("list-item", { name: "productCard" });

    items.forEach((item, i) => {
      const link = getByRole(item, "link");
      expect(link).toHaveAttribute("href", `/product/${mockedProducts[i].id}`);
    });
  });

  test("Correctly renders prop: props.title", () => {
    mockedProducts.forEach((prod, i) => {
      expect(screen.getAllByRole("heading", { level: 4 })[i]).toHaveTextContent(
        prod.title
      );
    });
  });

  test("Correctly renders prop: props.img", async () => {
    let imgs = await screen.findAllByRole("img");
    let newArr = imgs.filter(
      (i) => i.src != "http://localhost/chevron-right.svg"
    );

    mockedProducts.forEach((prod, i) => {
      expect(newArr[i]).toHaveAttribute("src", prod.images[0]);
    });
  });

  test("Must confirm redirection route is set to /product/productId", async () => {
    const items = screen.getAllByRole("list-item", { name: "productCard" });

    items.forEach((item, i) => {
      const link = getByRole(item, "link");
      expect(link).toHaveAttribute("href", `/product/${mockedProducts[i].id}`);
    });
  });
});
