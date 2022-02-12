import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviesService} from '../services/movies.service'

export const getAllMovies = createAsyncThunk(
    'movieSlice/getAllMovies',
    async (_, {rejectedWithValue}) => {
        try {
            return await moviesService.getAll();
        } catch (e) {
            rejectedWithValue(e.message);
        }
    }
)

export const getAllMoviesWithGenre = createAsyncThunk(
    'movieSlice/getAllMoviesWithGenre',
    async (id, {rejectedWithValue}) => {
        try {
            return await moviesService.getAllWithGenre(id);
        } catch (e) {
            rejectedWithValue(e.message);
        }
    }
)

export const getMovieById = createAsyncThunk(
    'movieSlice/getMoviesWithId',
    async (id, {rejectedWithValue}) => {
        try {
            return await moviesService.getById(id);
        } catch (e) {
            rejectedWithValue(e.message);
        }
    }
)


const moviesSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        movies: [],
        movie:[],
        status: null,
        error: null
    },
    reducers: {

    },
    extraReducers: {
        [getAllMovies.fulfilled]: (state, action) => {
            state.movies = action.payload;
        },
        [getAllMoviesWithGenre.fulfilled]: (state, action) => {
            state.movies = action.payload;
        },
        [getMovieById.fulfilled]: (state, action) => {
            state.movie = action.payload.data;

        }
    }

})

const moviesReducer = moviesSlice.reducer;
export const {getMovie} = moviesSlice.actions
export default moviesReducer