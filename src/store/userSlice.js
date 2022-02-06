import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {userService} from "../services";


export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            return await userService.getAll();
        } catch (e) {
            console.log(e)
        }
    }
)

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
    },
    reducers: {}
})


const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
    },
    reducers: {
        addUser: (state, action) => {
            state.users.forEach(user => console.log(user.name))
        }
    },
    extraReducers: {
        [getAllUsers.fulfilled]: (state, action) => {
            state.users = action.payload


        }
    }
});


const userReducer = userSlice.reducer;
export const {addUser} = userSlice.actions;
export default userReducer;