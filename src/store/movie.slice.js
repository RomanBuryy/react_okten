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


const moviesSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        movies: [],
        status: null,
        error: null

    },
    reducers: {

    },
    extraReducers:{
        [getAllMovies.fulfilled]: (state, action) =>{
            state.movies = action.payload;

        }
    }
})

const moviesReducer = moviesSlice.reducer;
// export const {movieTest} = moviesSlice.actions
export default moviesReducer