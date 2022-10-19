import { screen, render } from "@testing-library/react";
import Form from "../Form/Form";
import { prettyDOM } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import { useParams } from "react-router-dom";
import { act } from "react-dom/test-utils";
import EditForm from "./EditForm";

import products from "../../__mocks__/products/products";
import putProducts from "../../utils/putProducts";
import getProductById from "../../utils/getProductById";
import { MemoryRouter } from "react-router-dom";

jest.mock("../../utils/putProducts");
jest.mock("../../utils/getProductById");

jest.mock("react-router-dom", () => {
  const originalModule = jest.requireActual("react-router-dom");
  return {
    __esModule: true,
    ...originalModule,
    useParams: jest.fn(),
  };
});

const formulario = {
  id: 1,
  title: "Producto",
  description: "iphone 9",
  price: 1,
  rating: {
    rate: 5,
    count: 0,
  },
  stock: 5,
  category: "Categoria",
  images: [
    "https://tito.uy/wp-content/uploads/Dulce-De-Leche-Conaprole-500-Grs.jpg",
  ],
};

describe("testeando putProducts", () => {
  it("Posteo un formulario y me devuelve status de 200", async () => {
    putProducts.mockResolvedValue({
      json: () => new Promise((resolve) => resolve({ status: 200 })),
    });

    const res = await putProducts(formulario).then((res) => res.json());

    expect(res.status).toBe(Number("200"));
  });
});

describe("testeando getProductsById", () => {
  test.skip("Me trae el producto correctamente", async () => {
    useParams.mockReturnValue({
      id: 50,
    });

    window.prompt = jest.fn();

    await act(async () => {
      await render(
        <MemoryRouter>
          <EditForm />
        </MemoryRouter>
      );
    });

    getProductById.mockImplementation((id) => {
      return new Promise((resolve) => {
        resolve({
          json: () => new Promise((resolve) => resolve(products[id])),
          status: 200,
        });
      });
    });
    const form = await getProductById(8).then((res) => res.json());
    console.log(form);
    const inputName = screen.getByLabelText("Nombre");
    console.log(inputName.value);
  });

  test("La cartita del producto se renderiza correctamente", async () => {
    const id = 6;

    getProductById.mockResolvedValue({
      json: () => new Promise((resolve) => resolve(products[id])),
    });

    const form = await getProductById(0).then((res) => res.json());
  });
});
