import React, {useEffect} from 'react';
import {Outlet, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {getAllMoviesWithGenre} from "../../store";
import Movie from "../../components/Movie/Movie";
import css from "../MoviesPage/MoviesPage.module.css";

const MovieGenresPage = () => {

    const params = useParams();
    const {movies} = useSelector(state => state['moviesReducer'])
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMoviesWithGenre(params.id));
    }, [params.id])

    return (
        <div className={css.movies}>
            <Outlet/>
            {movies.results && movies.results.map((movie) => <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default MovieGenresPage;