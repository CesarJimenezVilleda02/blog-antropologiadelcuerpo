import React from 'react';
import './article_card.scss';
import { Link } from 'react-router-dom';

const ArticleCard = (props) => {
    // console.log(props);
    // console.log(props.contenid);
    const { ...publicacion } = props.contenido;
    // console.log(publicacion);

    const imageUrl = props.contenido.img__url;
    // console.log(imageUrl);

    return (
        <div className='card'>
            <div className='card__image' style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className='card__info'>
                <h1>{publicacion.title}</h1>
                <h2>Entrada semana {publicacion.number}</h2>
                <p>{publicacion.content[0].split(' ').slice(0, 20).join(' ')}...</p>
                <Link to={`/${publicacion.routeName}`}>
                    <div className='button'>Ver más</div>
                </Link>
            </div>
        </div>
    );
};

export default ArticleCard;
