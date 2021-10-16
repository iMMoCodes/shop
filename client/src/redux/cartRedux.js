import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += action.payload.quantity
      state.products.push(action.payload)
      state.total += action.payload.price * action.payload.quantity
    },
    updateProduct: (state, action) => {
      state.products[
        state.products.findIndex((item) => item._id === action.payload.id)
      ].quantity += action.payload.quantity
      state.quantity += action.payload.quantity
      state.total += action.payload.price * action.payload.quantity
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload.id
      )
      state.quantity += action.payload.quantity
      state.total += action.payload.price * action.payload.quantity
    },
    deleteCart: (state) => {
      state.products = []
      state.quantity = 0
      state.total = 0
    },
  },
})

export const { addProduct, updateProduct, deleteProduct, deleteCart } =
  cartSlice.actions
export default cartSlice.reducer
