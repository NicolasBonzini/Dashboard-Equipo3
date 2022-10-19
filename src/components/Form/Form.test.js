import { screen, render } from "@testing-library/react";
import Form from "./Form";
import { prettyDOM } from "@testing-library/dom";
import userEvent from "@testing-library/user-event";

import { act } from "react-dom/test-utils";
import { renderHook } from "@testing-library/react";

import { waitFor } from "@testing-library/dom";

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
    ,
  ],
};

describe("Todos los elementos se renderizan correctamente", () => {
  test("El input del nombre renderiza correctamente y captura el valor predeterminado", () => {
    // Renderizamos componente form
    render(<Form formu={form} />);
    //Tomamos el input de nombre del producto
    const nombre = screen.getByLabelText("Nombre");
    //assertion
    expect(nombre).toHaveValue("Producto");
  });

  test("El input del precio renderiza correctamente y captura el valor predeterminado", () => {
    // Renderizamos componente form
    render(<Form formu={form} />);
    //Tomamos el input de nombre del producto
    const precio = screen.getByLabelText("Valor");

    // console.log(prettyDOM(precio));
    //assertion
    expect(precio).toHaveValue(1);
  });

  test("El Stock se renderiza y captura el valor predeterminado", () => {
    // Renderizamos componente form
    render(<Form formu={form} counter={5} />);
    //Tomamos el input de nombre del producto
    const stock = screen.getByLabelText("Stock");
    // console.log(prettyDOM(stock));
    //assertion
    expect(parseInt(stock.defaultValue)).toBe(5);
  });

  test("El text area captura el valor escrito", () => {
    // Renderizamos componente form
    render(<Form formu={form} />);
    //Tomamos el input de nombre del producto
    const textAr = screen.getByLabelText("Descripción");
    // console.log(prettyDOM(stock));
    //assertion
    expect(textAr.defaultValue).toBe("iphone 9");
  });

  test("El Select captura el valor predeterminado", () => {
    // Renderizamos componente form
    render(<Form formu={form} />);
    //Tomamos el input de nombre del producto
    const select = screen.getByLabelText("Tienda");
    // console.log(prettyDOM(select));
    //assertion
    expect(select.value).toBe("Tienda");
  });

  test("El input de la imagen se renderiza correctamente", () => {
    // Renderizamos componente form
    render(<Form formu={form} />);
    //Tomamos el input de nombre del producto
    const inputImg = screen.getByLabelText("Nueva Imagen");
    // console.log(prettyDOM(select));
    //assertion
    expect(inputImg).toBeInTheDocument();
  });

  test("El boton de añadir producto se renderiza", () => {
    // Renderizamos componente form
    render(<Form formu={form} />);
    //Tomamos el input de nombre del producto
    const buttonAdd = screen.getByText("Añadir");
    // console.log(prettyDOM(select));
    //assertion
    expect(buttonAdd).toBeInTheDocument();
  });

  test("El componente deleteImage se renderiza correctamente", () => {
    // Renderizamos componente form
    render(<Form formu={form} />);
    //Tomamos el input de nombre del producto
    const deleteImage = screen.getByAltText("Producto");
    // console.log(prettyDOM(deleteImage));
    //assertion
    expect(deleteImage).toBeInTheDocument();
  });

  test("El boton de Guardar producto se renderiza correctamente", () => {
    // Renderizamos componente form
    render(<Form formu={form} />);
    //Tomamos el input de nombre del producto
    const saveProduct = screen.getByText("Guardar");
    // console.log(prettyDOM(deleteImage));
    //assertion
    expect(saveProduct).toBeInTheDocument();
  });

  test("El boton de Cancelar producto se renderiza correctamente", () => {
    // Renderizamos componente form
    render(<Form formu={form} />);
    //Tomamos el input de nombre del producto
    const cancelProduct = screen.getByText("Cancelar");
    // console.log(prettyDOM(deleteImage));
    //assertion
    expect(cancelProduct).toBeInTheDocument();
  });
});

describe("Todos los elementos interactuan correctamente", () => {
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
    expect(stockNumber.value).toBe("6");
    await userEvent.click(resta);
    expect(stockNumber.value).toBe("5");
  });

  test("El input del nombre permite escribir sin sobreescribir el campo predeterminado", async () => {
    render(<Form formu={form} />);

    const input = screen.getByLabelText("Nombre");

    await userEvent.type(input, "hola");

    expect(input).toHaveValue("Productohola");
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

    expect(textAr).toHaveValue("iphone 9ola");
  });
  test("El input de la imagen permite escribir sin sobreescribir el campo predeterminado", async () => {
    render(<Form formu={form} />);

    const inputImg = screen.getByLabelText("Nueva Imagen");

    await userEvent.type(inputImg, "ola.jpg");

    expect(inputImg).toHaveValue("ola.jpg");
  });

  test("Si el input de la imagen tiene una url, al tocar el boton de agregar se añade la imagen", async () => {
    render(<Form formu={form} />);
    const inputImg = screen.getByLabelText("Nueva Imagen");

    const add = screen.getByText("Añadir");
    //estas son las imagenes al principio
    const imagenes = form.images;

    //aqui agrego un texto al campo
    await userEvent.type(inputImg, "ola.jpg");
    await userEvent.click(add);

    expect(imagenes).toHaveLength(2);
  });

  test.only("Al añadir la imagen, se muestra en pantalla la imagen añadida", async () => {
    render(<Form formu={form} />);
    // array de imagenes que se renderizan
    const imagenes = screen.getAllByAltText("Producto");
    //input para añadir imagen
    const inputImg = screen.getByLabelText("Nueva Imagen");
    // boton para añadir
    const add = screen.getByText("Añadir");
    //aqui añado imagen
    await userEvent.type(inputImg, "ola.jpg");
    await userEvent.click(add);

    console.log(imagenes.length);
  });
});