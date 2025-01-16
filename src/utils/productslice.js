import { createSlice } from "@reduxjs/toolkit";

const productslice = createSlice({
   name : "products",
   initialState : [],
   reducers:{
    setProducts:(state,action)=>{
        return action.payload; 
    }
   } 
})

export const {setProducts} = productslice.actions;
export default productslice.reducer;