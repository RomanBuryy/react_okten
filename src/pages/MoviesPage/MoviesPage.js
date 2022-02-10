import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Outlet} from "react-router-dom";

import Movie from "../../components/Movie/Movie";
import css from './MoviesPage.module.css'
import {getAllMovies} from "../../store";

const MoviesPage = () => {
    const {movies} = useSelector(state => state['moviesReducer'])
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMovies());
    }, [dispatch])

    return (

        <div className={css.movies}>
            <Outlet/>
            {movies.results && movies.results.map((movie) => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default MoviesPage;