import React from 'react';

import css from './movie.module.css'
import {NavLink} from "react-router-dom";
import StarRatings from "react-star-ratings";


const Movie = ({movie}) => {


    return (


        <div className={css.card}>
            <NavLink to={movie.id.toString()} state={movie}>
                <div className={css.card_img}>

                    {<img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title}/>}
                    <div className={css.stars}>
                        <StarRatings
                            rating={movie.vote_average}
                            starDimension="20px"
                            starSpacing="4px"
                            starRatedColor="#F7AD19"
                            numberOfStars={9}
                            starEmptyColor="white"
                        />
                    </div>
                </div>
            </NavLink>
            <div className={css.card_title}>
                <div>{movie.title}</div>
            </div>


        </div>
    );
};

export default Movie;