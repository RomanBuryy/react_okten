import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getAllMoviesWithGenre} from "../../store";
import Movie from "../../components/Movie/Movie";

const MovieGenresPage = () => {

 const params = useParams();

    console.log(params.id);

    const {movies} = useSelector(state => state['moviesReducer'])
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllMoviesWithGenre(params.id));
    }, [params.id])


    console.log(movies)

    return (
        <div>
            {movies.results&&movies.results.map((movie)=> <Movie key={movie.id} movie={movie}/>)}
        </div>
    );
};

export default MovieGenresPage;