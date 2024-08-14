import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import CartController from "../features/cart/controller"
import FetchStates from "../utils/fetchstates"

const initialState = {
  state: FetchStates.default,
  error: null,
  backupCart: null,
  cart: null,
  cartItems: {},
  total: 0,
}

export const fetchCartFromServer = createAsyncThunk('cart/fetch', async (_, { rejectWithValue }) => {
  try {
    return await CartController.retrieveCart()
  } catch (e) {
    return rejectWithValue(e.message)
  }
})

const addToServerCart = createAsyncThunk('cart/add', async ({ productID, quantity }, { rejectWithValue }) => {
  try {
    return await CartController.addToCart(productID, quantity);
  } catch (e) {
    return rejectWithValue(e.toString());
  }
})

export const placeOrder = createAsyncThunk('cart/create')

async function addIt(productID, quantity) {
  try {
    return await CartController.addToCart(productID, quantity);
  } catch (e) {
    return e.toString();
  }
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (_, action) => {
      console.log(action.payload)
      addToServerCart(action.payload)
    },
    changeProductQuantity: (state, action) => {
      console.log({ state, action })
    },
    changeProductColor: (state, action) => {}
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCartFromServer.pending, (state, action) => {
      state.state = FetchStates.loading
      state.error = null
    })
    builder.addCase(fetchCartFromServer.fulfilled, (state, { payload }) => {
      state.backupCart = {...payload}
      state.cart = {...payload}
      payload.line_items.forEach(product => {
        state.cartItems[product.product_id] = {
          id: product.id,
          product_id: product.product_id,
          price: parseFloat(product.price.formatted),
          quantity: product.quantity,
          totalPrice: parseFloat(product.line_total.formatted)
        }
      })
      state.total = parseFloat(payload.subtotal.formatted)
      state.state = FetchStates.complete
    })
    builder.addCase(fetchCartFromServer.rejected, (state, action) => {
      state.backupCart = null
      state.state = FetchStates.error
      state.error = action.payload
      console.log('the error is =>', action.payload)
    })
  }
})

export default cartSlice.reducer
export const { addToCart, changeProductQuantity, changeProductColor } = cartSlice.actions