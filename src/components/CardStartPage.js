import React from 'react'
import "../assets/styles/CardStartPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouse,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';

const CardStartPage = ({listProd}) => {

    const navigate = useNavigate();
    

    console.log(listProd);

    const handleListProducts = () => {
        navigate('/products');
    }

    const handleAddProducts = () => {
        navigate('/product/21');
    }

    return (
        <div className='card-content'>
            <div className='card-logo'><FontAwesomeIcon icon={faHouse} /></div>
            <p className='card-number'>{listProd}</p>
            <p className='card-text'>Productos</p>
            <div className='card-button-content'>
                <button className='card-button' onClick={handleListProducts}>Ver Listado</button>
                <button className='card-button' onClick={handleAddProducts}>Agregar Producto</button>
            </div>
        </div>
    )
}

export default CardStartPage