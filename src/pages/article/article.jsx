import React from 'react';
import './article.scss';

const Article = (props) => {
    const paragraphs = props.contenido.content.map((paragraph) => {
        return <p className='article__paragraph'>{paragraph}</p>;
    });
    const imageUrl = props.contenido.img__url;
    return (
        <div className='article'>
            <div className='article__header' style={{ backgroundImage: `url(${imageUrl})` }}>
                <div>
                    <h1>{props.contenido.title}</h1>
                    <h2>Entrada semana {props.contenido.semana}</h2>
                </div>
            </div>
            <div className='article__paragraphs'>{paragraphs}</div>
            <div className='article__video'>
                {props.contenido.video__url ? (
                    <iframe
                        src={props.contenido.video__url}
                        frameborder='0'
                        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                        allowfullscreen></iframe>
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
};

export default Article;
