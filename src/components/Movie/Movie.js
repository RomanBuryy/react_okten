import React from 'react';

import css from './movie.module.css'
import {NavLink} from "react-router-dom";


const Movie = ({movie}) => {


    return (


        <div className={css.card}>
            <NavLink to={movie.id.toString()} state={movie}>
                <div className={css.card_img}>
                    {<img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}/>}
                </div>
            </NavLink>
            <div className={css.card_title}>
                <div>{movie.title}</div>
            </div>


        </div>
    );
};

export default Movie;