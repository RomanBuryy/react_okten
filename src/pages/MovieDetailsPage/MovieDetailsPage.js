import React, {useEffect} from 'react';
import {useParams, Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";


import {getMovieById} from "../../store";
import StarRatings from 'react-star-ratings';

const MovieDetailsPage = () => {

    const params = useParams();

    const {movie} = useSelector(state => state['moviesReducer'])
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovieById(params.id));
    }, [params, dispatch])

    console.log(params)

    return (

        <div style={{color: "white"}}>
            <Outlet/>
            {movie.overview}
            <StarRatings
                rating={movie.vote_average}
                starDimension="20px"
                starSpacing="8px"
                starRatedColor="yellow"
                numberOfStars={10}
            />
        </div>
    );
};

export default MovieDetailsPage;