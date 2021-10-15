import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    pending: false,
    error: false,
  },
  reducers: {
    // GET
    getProductStart: (state) => {
      state.pending = true
      state.error = false
    },
    getProductSuccess: (state, action) => {
      state.pending = false
      state.products = action.payload
    },
    getProductFailure: (state) => {
      state.pending = false
      state.error = true
    },
    // DELETE
    deleteProductStart: (state) => {
      state.pending = true
      state.error = false
    },
    deleteProductSuccess: (state, action) => {
      state.pending = false
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      )
    },
    deleteProductFailure: (state) => {
      state.pending = false
      state.error = true
    },
  },
})

export const {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
} = productSlice.actions
export default productSlice.reducer
