import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {userService} from "../services";


export const getAllUsers = createAsyncThunk(
    'userSlice/getAllUsers',
    async (_, {rejectWithValue})=>{
        try {
            return await userService.getAll();
        }catch (e) {
            console.log(e)
        }
    }
)




const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        posts:[],
        comments:[]
    },
    reducers: {
            addUser: (state, action)=>{
                console.log(state)
                console.log(action)
            }
    },
    extraReducers:{
        [getAllUsers.fulfilled]: (state, action) =>{
            state.users = action.payload

        }
    }
});


const userReducer = userSlice.reducer;
export const {addUser} = userSlice.actions;
export default userReducer;