import { createSlice } from '@reduxjs/toolkit'

const productSlice = createSlice({
  name: 'product',
  initialState: {
    pending: false,
    products: [],
    error: false,
  },
  reducers: {
    getProductStart: (state) => {
      state.pending = true
    },
    getProductSuccess: (state, action) => {
      state.pending = false
      state.products = action.payload.filter(
        (product) => state.products.indexOf(product) === -1
      )
      state.error = false
    },
    getProductFailure: (state) => {
      state.pending = false
      state.error = true
    },
  },
})

export const { getProductStart, getProductSuccess, getProductFailure } =
  productSlice.actions
export default productSlice.reducer
