import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getMovieById} from "../../store";
import css from './movieDetailsPage.module.css'
import StarRatings from "react-star-ratings";

const MovieDetailsPage = () => {

    const params = useParams();

    const {movie} = useSelector(state => state['moviesReducer'])
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieById(params.id));
    }, [params, dispatch])

    console.log(movie)


    return (

        <div className={css.movieDetails_card}>

            <div className={css.movieDetails_info}>

                <div className={css.movieDetails_img}>
                    {<img src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`} alt={movie.title}/>}
                </div>

                <div className={css.movieDetails_text}>

                    <div className={css.movieDetails_header}>
                        <div className={css.movieDetails_title}>{movie.title}</div>
                        <div className={css.movieDetails_vote_average}><StarRatings
                            rating={movie.vote_average}
                            starDimension="14px"
                            starSpacing="2px"
                            starRatedColor="#F7AD19"
                            numberOfStars={10}
                            starEmptyColor="white"
                        /></div>
                    </div>

                    <div className={css.movieDetails_genres}> {movie.genres && movie.genres.map(value => <div className={css.movieDetails_genre} key={value.id}>{value.name}</div>)}</div>
                    <div className={css.movieDetails_overview}>{movie.overview}</div>

                </div>

            </div>
        </div>
    );
};

export default MovieDetailsPage;