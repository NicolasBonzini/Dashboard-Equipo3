import { findAllByText, logRoles, render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom';
import ProductList from './ProductList';
import products from './mockProducts'
import getProducts from "../../../utils/getProducts";


jest.mock("../../../utils/getProducts");




        


test('Mensaje inicial de cargando', () => { 
    getProducts.mockImplementation( ()=> new Promise(resolve => {}));
    render(<MemoryRouter>
        <ProductList />
    </MemoryRouter>)
    const messageLoading = screen.getAllByText('Cargando...')
 })

describe('Filtros test y renderizacion de mensajes', () =>{

    beforeEach(async () => {
        getProducts.mockResolvedValue( products );
        
        await act( async ()=>{
            await render(<MemoryRouter>
                            <ProductList />
                        </MemoryRouter>)
        })

    }); 

    test('Ver si el boton se renderiza', () => { 
        const searchInput = screen.getByPlaceholderText(/Buscar productos/i)
    })

    test('Mensaje de no coincidencias', async () =>{
        const searchInput = screen.queryByPlaceholderText(/Buscar productos/i)

        await userEvent.type(searchInput, 'juanito alcachofo!')
        const productsFilter = products.filter(x => x.title.toLowerCase().includes('juanito alcachofo!'))

        const messageNotMatch = screen.getByText('No hay coincidencias')
    })

    test('Ver si filtra por titulo', async () => { 
        const searchInput = screen.queryByPlaceholderText(/Buscar productos/i)

        userEvent.type(searchInput, 'iPhone')
        const productsFilter = products.filter(x => x.title.toLowerCase().includes('iPhone'))
        const cards = await screen.findAllByRole('heading')

        productsFilter.forEach(x => expect(cards).toHaveTextContent(x.title))

    })
    test('Ver si el boton de limpiar se renderiza', async () => { 
        const cleanInput = screen.getByText(/Limpiar/i)
    })

    test('Ver si el boton de limpiar vacia los campos', async () => { 
        const cleanInput = screen.getByText(/Limpiar/i)
        const searchInput = screen.queryByPlaceholderText(/Buscar productos/i)

        await userEvent.type(searchInput, 'iphone')
        await userEvent.click(cleanInput)
        expect(searchInput).toBeEmptyDOMElement()
    })

    test('Ver si al limpiar los campos vuelve a mostrar todos los productos', async () => { 
        const cleanInput = screen.getByText(/Limpiar/i)
        const searchInput = screen.queryByPlaceholderText(/Buscar productos/i)

        await userEvent.type(searchInput, 'iphoneeeeeee')
        await userEvent.click(cleanInput)

        const cards = await screen.findAllByRole('heading')
        const prodTextTag = [...cards.map(tag => tag.textContent)]
        const prodTitles = [... new Set(products.map(tag => tag.title))]
        expect(prodTextTag).toEqual(prodTitles);

    })


    test('Ver si filtra por Categoria', async () => { 
        const selects = screen.getByRole('combobox');
        const productsFilter = products.filter(x => x.category == 'smartphones');
        const option = await screen.findByRole('option', { name: 'smartphones' })
        await act(async ()=>{
            await userEvent.selectOptions(
                    selects,
                    option
                    )
                }
            )
        const cards = await screen.findAllByRole('heading')
        const prodDist = [... new Set(cards.map(tag => tag.textContent))]
        const prodTitles = [... new Set(productsFilter.map(tag => tag.title))]
        expect(prodDist).toEqual(prodTitles);
    })
})

//ver si filtra min 
//ver si filtra max
//ver si hace filtros combinados