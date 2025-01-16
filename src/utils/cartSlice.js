import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name : "cart",
    initialState: {
        items: [], // Array to store cart items
      },
    reducers:{
        addtoCart: (state, action) => {
            // Check if item already exists in the cart
            console.log("action called")
            console.log(action.payload);
            const existingItem = state.items.find(  item => item.id === action.payload.id && item.OrderSize === action.payload.OrderSize);
            if (existingItem) {
              // If item exists, increase its quantity
              existingItem.cartQuantity += 1;
            } else {
              // If item doesn't exist, add it to the cart
              state.items.push({ ...action.payload, cartQuantity: 1 });
            }
          },
        removeItem: (state, action) => {
        // Remove item by filtering out the item with the given id
        state.items = state.items.filter(item => item.id !== action.payload.id);
        },
    }

})
export const {addtoCart,removeItem} = cartSlice.actions;
export default cartSlice.reducer;