import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./movie.slice";

const store = configureStore({
    reducer:{
        moviesReducer
    }
})

export default store