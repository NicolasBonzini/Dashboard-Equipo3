import { screen, render } from "@testing-library/react";
import Form from "./Form";
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

describe("Todos los elementos se renderizan correctamente", () => {
  test("El Select captura el valor predeterminado", () => {
    // Renderizamos componente form
    render(<Form formu={form} />);
    //Tomamos el input de nombre del producto
    const select = screen.getByLabelText("Tienda");
    // console.log(prettyDOM(select));
    //assertion
    expect(select.value).toBe("Tienda");
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
});
