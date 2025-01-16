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

          addCurtaintoCart: (state, action) => {
            // Check if item already exists in the cart
            console.log("action called")
            console.log(action.payload);
            const existingItem = state.items.find(  item => item.id === action.payload.id && item.stichingType === action.payload.stichingType && item.OrderSize === action.payload.OrderSize);
            if (existingItem) {
              // If item exists, increase its quantity
              existingItem.cartQuantity += 1;
            } else {
              // If item doesn't exist, add it to the cart
              state.items.push({ ...action.payload, cartQuantity: 1 });
            }
          },
        
          removeItem: (state, action) => {
            const itemIndex = state.items.findIndex(
              item => item.id === action.payload.id && item.OrderSize === action.payload.OrderSize
            );
          
            if (itemIndex !== -1) {
              if (state.items[itemIndex].cartQuantity > 1) {
                // Decrease the quantity if it's more than 1
                state.items[itemIndex].cartQuantity -= 1;
              } else {
                // Remove the item if the quantity is 1
                state.items.splice(itemIndex, 1);
              }
            }
          },
    }

})
export const {addtoCart,addCurtaintoCart,removeItem} = cartSlice.actions;
export default cartSlice.reducer;