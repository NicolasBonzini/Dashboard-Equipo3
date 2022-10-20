import {
    findAllByText,
    logRoles,
    render,
    screen,
    act,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import deleteProduct from "../../../utils/deleteProduct";
import products from "../../../__mocks__/products/products";
import ProductView from './ProductView'

jest.mock("../../../utils/deleteProduct");


window.localStorage = jest.fn()
window.prompt = jest.fn()


describe('btn Delete product', () => {

    beforeEach(async () => {

        await act(async () => {
            await render(
            <MemoryRouter>
                <ProductView />
            </MemoryRouter>)
        })
    });

    test('Ver si se renderiza el boton de eliminar', () => {
        screen.getByText(/Eliminar/i)
    })

    test('Ver si es clickleable', () => {
        const btnDelete = screen.getByText(/Eliminar/i)
        btnDelete.click(btnDelete)
    })
})