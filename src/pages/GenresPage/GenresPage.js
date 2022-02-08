import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllGenres} from "../../store/genres.slice";

const GenresPage = () => {

    const {genres} = useSelector(state => state['genresReducer'])
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres());
    }, [dispatch])

    return (
        <div>
            {genres.genres && genres.genres.map(value => <div>{value.name}</div>)}
        </div>
    );
};

export default GenresPage;