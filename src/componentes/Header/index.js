import React from 'react';
import Nike from "../../images/Nike.png";

export const Header = () => {
    return (
        <header>
        <div className='logo'>
            <img src={Nike} alt='logo' width="150px" />
        </div>
        <ul>
            <li>
                <a href='#'>INICIO</a>
            </li>
            <li>
                <a href='#'>PRODUCTOS</a>
            </li>
        </ul>
        <div className='cart'>
            <box-icon name="cart"></box-icon>
            <span className='item__total'>5</span>
        </div>
        </header>
    )
}



