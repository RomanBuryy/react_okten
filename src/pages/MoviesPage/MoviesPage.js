import React, {useEffect, useState} from 'react';

import {userService as moviesService} from "../../services/movies.service";
import Movie from "../../components/Movie/Movie";
import css from './MoviesPage.module.css'
import {useDispatch, useSelector} from "react-redux";
import {getAllMovies} from "../../store";

const MoviesPage = () => {

    // const [movies, setMovies] = useState([]);

    const {movies} = useSelector(state => state['moviesReducer'])

    const dispatch = useDispatch();

    //
    //
    // useEffect(() => {
    //     moviesService.getAll().then((movie) => {
    //         setMovies(movie)
    //     })
    // }, []);

    useEffect(() => {
        dispatch(getAllMovies());
    },[dispatch])

    console.log(movies.results)


    return (
        <div className={css.movies}>
            {/*{movies.results&&movies.results.map((movie) =><div>{movie.title}</div>)}*/}

            {/*{movies.results&&movies.results.map((movie) => <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={'asd'}/>)}*/}
            {movies.results&&movies.results.map((movie) => <Movie key={movie.id} movie={movie}/> )}
        </div>
    );
};

export default MoviesPage;