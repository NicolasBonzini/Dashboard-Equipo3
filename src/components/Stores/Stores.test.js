import { screen, render, act, logRoles } from "@testing-library/react";
import Stores from "./Stores";
import { MemoryRouter } from "react-router-dom";

beforeEach(async () => {

    await act(async () => {
        render(
            <MemoryRouter>
                <Stores />
            </MemoryRouter>);
    });

});


describe("Los elementos de Stores se renderizan correctamente", () => {


    test("El parrafo con el texto Tienda se renderiza correctamente", () => {


        const pwhitNameStore = screen.getByText('Tienda');
        expect(pwhitNameStore).toBeInTheDocument();

    });

    test('Los parrafos con la cantidad de Tiendas se renderizan correctamente', () => {
        const pWhitCountStores = screen.getByText(1);
        expect(pWhitCountStores).toBeInTheDocument();

    })

    test('El link Ver Listado se renderiza correctamente', () => {
        const linkShowList = screen.getByText('Ver Listado');
        expect(linkShowList).toBeInTheDocument();

    })

    test('El link Agregar Tienda se renderiza correctamente', () => {
        const linkAddStore = screen.getByText('Agregar Tienda');
        expect(linkAddStore).toBeInTheDocument();
    })

    test('El icono se renderiza correctamente', () => {
        const ico = screen.getByTitle('icoStore');
        expect(ico).toBeInTheDocument();
    })

});

describe("Los link redirigen de forma correcta a page 404 not found", () => {

    test('El link "Ver Listado" redirige correctamente a /*', async () => {

        const LinkToShowList = screen.getByText('Ver Listado');
        const link = LinkToShowList.getAttribute('href');

        expect(link).toMatch('/*');

    })

    test('El link "Agregar Producto" redirige correctamente a /*', () => {

        const LinkToAddList = screen.getByText('Agregar Tienda');
        const link = LinkToAddList.getAttribute('href');
        expect(link).toMatch('/*');

    })


})



