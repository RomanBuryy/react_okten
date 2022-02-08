import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./movie.slice";
import genresReducer from "./genres.slice";

const store = configureStore({
    reducer:{
        moviesReducer,
        genresReducer
    }
})

export default store