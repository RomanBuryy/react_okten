import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {genresService} from "../services/genres.service";

export const getAllGenres = createAsyncThunk(
    'movieSlice/getAllGenres',
    async (_, {rejectedWithValue}) => {
        try {
            return await genresService.getAll();
        } catch (e) {
            rejectedWithValue(e.message);
        }
    }
)

const genresSlice = createSlice({
    name: 'movieSlice',
    initialState: {
        genres: [],
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: {
        [getAllGenres.fulfilled]: (state, action) => {
            state.genres = action.payload;
        }
    }
})

const genresReducer = genresSlice.reducer;
// export const {movieTest} = moviesSlice.actions
export default genresReducer