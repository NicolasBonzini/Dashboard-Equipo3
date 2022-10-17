import { screen, render } from "@testing-library/react";
import Form from "./Form";
import { prettyDOM } from "@testing-library/dom";

describe("Todos los inputs renderizan correctamente", () => {
  const form = {
    id: 1,
    title: "Producto",
    description: "Descripcion",
    price: 1,
    rating: {
      rate: 5,
      count: 0,
    },
    stock: 5,
    category: "Categoria",
    images: [""],
  };

  test("El input del nombre renderiza correctamente y captura el valor predeterminado", () => {
    // Renderizamos componente form
    render(<Form form={form} />);
    //Tomamos el input de nombre del producto
    const nombre = screen.getByLabelText("Nombre");
    //assertion
    expect(nombre).toHaveValue("Producto");
  });

  test("El input del precio renderiza correctamente y captura el valor predeterminado", () => {
    // Renderizamos componente form
    render(<Form form={form} />);
    //Tomamos el input de nombre del producto
    const precio = screen.getByLabelText("Valor");

    // console.log(prettyDOM(precio));
    //assertion
    expect(precio).toHaveValue(1);
  });

  test("El Stock se renderiza, captura el valor predeterminado y reacciona a los eventos", () => {
    // Renderizamos componente form
    render(<Form form={form} counter = {5} />);
    //Tomamos el input de nombre del producto
    const stock = screen.getByLabelText("Stock");

    // console.log(prettyDOM(stock));
    //assertion
    expect(stock).toBeInTheDocument();
    // expect(stock.defaultValue).toBe(5);
  });
});
