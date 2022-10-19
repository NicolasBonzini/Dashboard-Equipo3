import { screen, render, act } from "@testing-library/react";
import CardStartPage from "./CardStartPage";
import mockedProducts from "../../__mocks__/products/products";
import { MemoryRouter } from "react-router-dom";
import getProducts from "../../utils/getProducts";

jest.mock("../../utils/getProducts");

beforeEach(async () => {
    getProducts.mockResolvedValue(mockedProducts);
    await act(async () => {
        render(
            <MemoryRouter>
                <CardStartPage listProd={mockedProducts.length} />
            </MemoryRouter>);
    });


});

describe("Los elementos de CardStartPage se renderizan correctamente", () => {

 
    test("El parrafo con el texto productos se renderiza correctamente", () => {


        const pWhitNameProducts = screen.getByText('Productos');
        expect(pWhitNameProducts).toBeInTheDocument();

    });

    test('Los parrafos con la cantidad de producto se renderizan correctamente', () => {
        const pWhitCountProducts = screen.getByText(30);
        expect(pWhitCountProducts).toBeInTheDocument();

    })

    test('El link Ver Listado se renderiza correctamente', () => {
        const linkShowList = screen.getByText('Ver Listado');
        expect(linkShowList).toBeInTheDocument();

    })

    test('El link Agregar Producto se renderiza correctamente', () => {
        const linkAddList = screen.getByText('Agregar Producto');
        expect(linkAddList).toBeInTheDocument();
    })

    test('El icono se renderiza correctamente', () => {
        const ico = screen.getByTitle('ico');
        expect(ico).toBeInTheDocument();
    })

    test('El parrafo que muestra la cantidad de productos recibe la prop de manera correcta', () => {
        const p = screen.getByTitle('countProducts');
        expect(p).toHaveTextContent(30);

    })

});

describe("Los link redirigen de forma correcta", () => {




})

