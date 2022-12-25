import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import ProductsController from "./controller";
import FetchStates from "../../utils/fetchstates";

const initialState = {
  status: FetchStates.default,
  products: undefined,
  error: undefined,
}

export const fetchProducts = createAsyncThunk('products/get', async (_, { rejectWithValue }) => {
  try {
    return await ProductsController.getProducts();
  } catch (e) {
    return rejectWithValue(e.toString());
  }
});

const productsSlice = createSlice({
  name: 'products',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.status = FetchStates.loading;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
      state.status = FetchStates.complete;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.error = action.payload;
      state.status = FetchStates.error;
    });
  },
});

export default productsSlice.reducer;