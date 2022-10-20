import { screen, render } from "@testing-library/react";

import Form from "../Form/Form";

import { prettyDOM } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";
import EditProduct from "./EditProduct";

const form = {
  id: 1,
  title: "Producto",
  description: "iphon",
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

test("Testeando carta de producto a editar", () => {
  render(
    <EditProduct
      img={form.images[0]}
      name={form.title}
      stock={form.stock}
      valor={form.price}
      alt={form.title}
    />
  );

  // se renderiza la primer imagen
  const img = screen.getByAltText(form.title);
  expect(img.src).toMatch(form.images[0]);

  //muestra correctamente el nombre
  const text = screen.getByText(form.title);
  expect(text.innerHTML).toBe(form.title);

  // muestra el precio correctamente
  const price = screen.getByText(form.price);
  expect(Number(price.innerHTML)).toBe(form.price);

  // muestra el stock correctamente
  const stock = screen.getByText(form.stock);
  expect(Number(stock.innerHTML)).toBe(form.stock);
});
