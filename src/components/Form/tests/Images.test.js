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

describe("Las imagenes del producto funcionan correctamente", () => {
  test("El input de la imagen se renderiza correctamente", () => {
    // Renderizamos componente form
    render(<Form formu={form} />);
    //Tomamos el input de nombre del producto
    const inputImg = screen.getByLabelText("Nueva Imagen");
    // console.log(prettyDOM(select));
    //assertion
    expect(inputImg).toBeInTheDocument();
  });
  test("El boton de añadir imagen se renderiza", () => {
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
  test.skip("Al añadir la imagen, se muestra en pantalla la imagen añadida, y podemos quitar imagenes al darle al boton quitar", async () => {
    render(<Form formu={form} />);
    //input para añadir imagen
    const inputImg = screen.getByLabelText("Nueva Imagen");
    // boton para añadir
    const add = screen.getByText("Añadir");
    // boton para quitar
    const del = screen.getByText("Quitar");

    // //aqui añado imagen
    await userEvent.type(inputImg, "ola.jpg");
    await userEvent.click(add);

    const imagenes = screen.getAllByAltText("Producto");
    expect(imagenes).toHaveLength(2);

    // Quito una imagen
    await userEvent.click(del);
    const imagenes2 = screen.getAllByAltText("Producto");
    expect(imagenes2).toHaveLength(1);
  });
});
