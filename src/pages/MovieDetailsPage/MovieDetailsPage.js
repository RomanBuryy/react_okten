import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getMovie} from "../../store";


const MovieDetailsPage = () => {

    const params = useParams();

    console.log(params);

    const {movies} = useSelector(state => state['moviesReducer'])
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovie(movies));
    }, [dispatch])


    return (
        <div>
            MovieDetails
        </div>
    );
};

export default MovieDetailsPage;