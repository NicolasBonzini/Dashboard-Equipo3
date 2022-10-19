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

describe("El boton de cancelar cambios funciona correctamente", () => {
  test("El boton de Cancelar producto se renderiza correctamente", () => {
    // Renderizamos componente form
    render(<Form formu={form} />);
    //Tomamos el input de nombre del producto
    const cancelProduct = screen.getByText("Cancelar");
    // console.log(prettyDOM(deleteImage));
    //assertion
    expect(cancelProduct).toBeInTheDocument();
  });
  test("Escribo el input del nombre, y al cancelar se borra lo que escribi", async () => {
    render(<Form formu={form} />);
    const cancel = screen.getByText("Cancelar");

    const inputName = screen.getByLabelText("Nombre");
    await userEvent.type(inputName, "Jorge");
    await userEvent.click(cancel);

    expect(inputName).toHaveValue("Producto");
  });
  test("Escribo el input del precio, y al cancelar se borra lo que escribi", async () => {
    render(<Form formu={form} />);
    const cancel = screen.getByText("Cancelar");

    const inputPrice = screen.getByLabelText("Valor");
    await userEvent.type(inputPrice, "40");
    await userEvent.click(cancel);

    expect(inputPrice).toHaveValue(Number("1"));
  });
  test("Escribo el input de la descripcion, y al cancelar se borra lo que escribi", async () => {
    render(<Form formu={form} />);
    const cancel = screen.getByText("Cancelar");

    const inputDescription = screen.getByLabelText("Descripción");
    await userEvent.type(inputDescription, "Oso");
    await userEvent.click(cancel);

    expect(inputDescription).toHaveValue("iphone 9");
  });
  test.skip("Añado imagen, y al cancelar se borra lo que escribi", async () => {
    render(<Form formu={form} />);
    const cancel = screen.getByText("Cancelar");

    const inputImg = screen.getByLabelText("Nueva Imagen");
    const add = screen.getByText("Añadir");

    await userEvent.type(inputImg, "ola.jpg");
    await userEvent.click(add);
    await userEvent.click(cancel);
    const imagenes = screen.getAllByAltText("Producto");
    console.log(imagenes.length);

    // expect(imagenes).toHaveLength("1");
  });
});
