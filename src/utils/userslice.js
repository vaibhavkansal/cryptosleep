import { createSlice } from "@reduxjs/toolkit";

const userslice = createSlice({
    name : 'user',
    initialState : null,
    reducers:{
        addUser:(state,action) => {
            return action.payload;  // this will set initial state to user
        },
        removeUser:(state,action)=>{
            return null;  // this will set initial state to null

        }
    }
})

export const {addUser,removeUser} = userslice.actions;
export default userslice.reducer;