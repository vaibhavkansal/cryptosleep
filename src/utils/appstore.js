import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userslice";
import productReducer from "./productslice";
import cartReducer from "./cartSlice";

const appstore = configureStore(
    {
        reducer:{
          user : userReducer,
          products: productReducer,
          cart:cartReducer,
        }
    }
);

export default appstore;