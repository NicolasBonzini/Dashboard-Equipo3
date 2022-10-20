import { screen, render } from "@testing-library/react";
import Form from "../Form";
import { prettyDOM } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

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

describe("Testeando los inputs", () => {
  test("El input del nombre renderiza correctamente y captura el valor predeterminado", () => {
    // Renderizamos componente form
    render(<Form formu={form} />);
    //Tomamos el input de nombre del producto
    const nombre = screen.getByLabelText("Nombre");
    //assertion
    expect(nombre).toHaveValue(form.title);
  });

  test("El input del precio renderiza correctamente y captura el valor predeterminado", () => {
    // Renderizamos componente form
    render(<Form formu={form} />);
    //Tomamos el input de nombre del producto
    const precio = screen.getByLabelText("Valor");

    //assertion
    expect(precio).toHaveValue(form.price);
  });

  test("El text area captura el valor escrito", () => {
    // Renderizamos componente form
    render(<Form formu={form} />);
    //Tomamos el input de nombre del producto
    const textAr = screen.getByLabelText("Descripción");
    //assertion
    expect(textAr.defaultValue).toBe(form.description);
  });
  test("El input del nombre permite escribir sin sobreescribir el campo predeterminado", async () => {
    render(<Form formu={form} />);

    const input = screen.getByLabelText("Nombre");

    await userEvent.type(input, "hola");

    expect(input).toHaveValue(form.title + "hola");
  });

  test("El input del precio permite escribir sin sobreescribir el campo predeterminado", async () => {
    render(<Form formu={form} />);

    const input = screen.getByLabelText("Valor");

    await userEvent.type(input, "4");

    expect(input).toHaveValue(Number(14));
  });
  test("El textarea de la descripcion permite escribir sin sobreescribir el campo predeterminado", async () => {
    render(<Form formu={form} />);

    const textAr = screen.getByLabelText("Descripción");

    await userEvent.type(textAr, "ola");

    expect(textAr).toHaveValue(form.description + "ola");
  });
});
