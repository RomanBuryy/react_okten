import {configureStore} from "@reduxjs/toolkit";
import moviesReducer from "./movie.slice";
import genresReducer from "./genres.slice";

const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                // Ignore these action types
                ignoredActions: ['movieSlice/getMoviesWithId/fulfilled'],
            },
        }),


    reducer: {
        moviesReducer,
        genresReducer
    }
})

export default store