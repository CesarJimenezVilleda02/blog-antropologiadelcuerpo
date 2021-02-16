import React from 'react';
import './main.scss';
import Data from '../../data/data.js';
import ArticleCard from '../../components/article_card/article_card.jsx';

const MainPage = () => {
    // console.log(Data);

    return (
        <div className='main-container'>
            <div className='image__clipath'></div>
            <h2>Entradas de la bitácora</h2>
            <div className='entradas'>
                {Data.map((entrada) => (
                    <ArticleCard contenido={entrada} />
                ))}
            </div>
        </div>
    );
};

export default MainPage;
