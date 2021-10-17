import { createSlice } from '@reduxjs/toolkit'

const wishSlice = createSlice({
  name: 'wishlist',
  initialState: {
    products: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.products.push(action.payload)
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (item) => item._id !== action.payload
      )
    },
  },
})

export const { addProduct, deleteProduct } = wishSlice.actions
export default wishSlice.reducer
