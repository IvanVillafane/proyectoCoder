import React from 'react';
import Portada from "../../images/inicio.jpg";
import { Link } from "react-router-dom";

export const Inicio = () => {
    return (
        <div className='inicio'>   
        <Link to="/">
            <h1>Inicio</h1>
        </Link>
        <Link to="/productos">
            <h1>Productos</h1>
        </Link>
        <img src={Portada} alt='inicio w-100'/>

        </div>
    )
}
