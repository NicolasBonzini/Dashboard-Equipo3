import React from 'react'
import "../assets/styles/cardStartPage.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faHouse,
} from "@fortawesome/free-solid-svg-icons";

const cardStartPage = () => {


    return (
        <div className='card-content'>
            <div className='card-logo'><FontAwesomeIcon icon={faHouse} /></div>
            <p className='card-number'>123</p>
            <p className='card-text'>Texto</p>
            <div className='card-button-content'>
                <button className='card-button'>Ver Listado</button>
                <button className='card-button'>Agregar Producto</button>
            </div>
        </div>
    )
}

export default cardStartPage