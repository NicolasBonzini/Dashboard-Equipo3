import { screen, render } from "@testing-library/react";
import Form from "../Form";
import { prettyDOM } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

const form = {
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

describe("Testeando el boton de stock", () => {
  test("El Stock se renderiza y captura el valor predeterminado", () => {
    // Renderizamos componente form
    render(<Form formu={form} counter={5} />);
    //Tomamos el input de nombre del producto
    const stock = screen.getByLabelText("Stock");
    // console.log(prettyDOM(stock));
    //assertion
    expect(parseInt(stock.defaultValue)).toBe(5);
  });

  test("el boton de stock interactua correctamente", async () => {
    render(<Form formu={form} />);

    //Tomamos el valor del stock inicial
    const stockNumber = await screen.findByLabelText("Stock");
    //Tomamos el boton de +
    const suma = screen.getByText("+");
    //Tomamos el boton de -
    const resta = screen.getByText("-");

    // Al clickear suma me debe actualizar el stockNumber
    await userEvent.click(suma);
    expect(stockNumber.defaultValue).toBe("6");
    await userEvent.click(resta);
    expect(stockNumber.defaultValue).toBe("5");
  });
});
