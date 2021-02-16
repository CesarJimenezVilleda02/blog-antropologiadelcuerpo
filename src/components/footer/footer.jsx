import React from 'react';
import './footer.scss';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='classDetails'>
                <h2>Antropología del cuerpo</h2>
                <h3>Grupo 1</h3>
                <h3>Clase impartida por Luis Nivardo Trejo Olvera</h3>
                <h3>Pablo César Jiménez Villeda</h3>
                <h3>A01703517</h3>
            </div>

            <div className='contact'>
                <h2>Contacto:</h2>
                <h3>
                    Github: <a href='https://github.com/CesarJimenezVilleda02'>@CesarJimenezVilleda02</a>
                </h3>
            </div>
            <p>
                &copy; Derechos de autor 2021 Pablo César Jiménez Villeda. Página diseñada para la clase Antropología
                del cuerpo.
            </p>
        </div>
    );
};

export default Footer;
