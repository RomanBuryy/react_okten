import React from 'react';

import css from './movie.module.css'

const Movie = ({movie}) => {
    return (
        <div>

            {<img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={'asd'}/>}
        </div>
    );
};

export default Movie;