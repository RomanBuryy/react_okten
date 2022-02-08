import React from 'react';

import css from './movie.module.css'

const Movie = ({movie}) => {
    return (
        <div className={css.card}>
            <div className={css.card_img}>
                {<img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}/>}
            </div>

            <div className={css.card_title}>
                <div >{movie.title}</div>
            </div>



        </div>
    );
};

export default Movie;