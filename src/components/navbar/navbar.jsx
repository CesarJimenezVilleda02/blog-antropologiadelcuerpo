import React from 'react';
import './navbar.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='nav'>
            <ul className='navigation-links'>
                <li>ANTROPOLOGÍA DEL CUERPO</li>
                <li>
                    <Link to='/'>Entradas</Link>
                </li>
                <li class='name'>Pablo César Jiménez Villeda</li>
            </ul>
            <div className='container'>
                <div className='container__details'>
                    <span>A01703517</span>
                    <span>
                        <a href='https://github.com/CesarJimenezVilleda02'>@CesarJimenezVilleda02</a>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
