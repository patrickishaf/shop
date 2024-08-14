import { configureStore } from "@reduxjs/toolkit";
import productsReducer from '../features/products/slice';
import cartReducer from './CartSlice';
import appReducer from '../features/app/slice';

const store = configureStore({
  reducer: {
    app: appReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});

export default store;