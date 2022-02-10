import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {NavLink, Outlet} from "react-router-dom";

import {getAllGenres} from "../../store/genres.slice";
import Genre from "../../components/Genre/Genre";


const GenresPage = () => {

    const {genres} = useSelector(state => state['genresReducer'])
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres());
    }, [dispatch])

    return (
        <div>
            <div>
                {genres.genres && genres.genres.map(value => <Genre key={value.id} genre={value}/>)}
            </div>

           <div>
               <Outlet/>
           </div>


        </div>

    );
};

export default GenresPage;