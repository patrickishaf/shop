import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import FetchStates from '../../utils/fetchstates';
import CartController from './controller';

const initialState = {
  status: FetchStates.default,
  cart: undefined,
  error: undefined,
  refreshed: false,
}

export const fetchCart = createAsyncThunk('cart/get', async (_, { rejectWithValue }) => {
  try {
    return await CartController.retrieveCart();
  } catch (e) {
    return rejectWithValue(e.toString());
  }
});

export const addToCart = createAsyncThunk('cart/add', async ({ productID, quantity }, { rejectWithValue }) => {
  try {
    console.log('running add to cart in slice. details =>', { productID, quantity });
    return await CartController.addToCart(productID, quantity);
  } catch (e) {
    return rejectWithValue(e.toString());
  }
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  extraReducers: (builder) => {
    // Fetch cart promise states
    builder.addCase(fetchCart.pending, (state) => {
      state.status = FetchStates.loading;
      state.error = undefined;
    });
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.status = FetchStates.complete;
    });
    builder.addCase(fetchCart.rejected, (state, action) => {
      console.log('ran into an error =>', action.payload);
      state.error = action.payload;
      state.status = FetchStates.error;
    });

    // Add to cart promise states
    builder.addCase(addToCart.pending, (state) => {
      state.status = FetchStates.loading;
      state.error = undefined;
    });
    builder.addCase(addToCart.fulfilled, (state, action) => {
      console.log('new value of cart in fulfilled case =>', action.payload);
      state.cart = action.payload;
      state.status = FetchStates.complete;
      state.refreshed = true;
    });
    builder.addCase(addToCart.rejected, (state, action) => {
      console.log('ran into an error =>', action.payload);
      state.error = action.payload;
      state.status = FetchStates.error;
    });
  },
});

export default cartSlice.reducer;