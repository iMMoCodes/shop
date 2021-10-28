import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    pending: false,
    products: [],
    error: false,
  },
  reducers: {
    // GET
    getProductStart: (state) => {
      state.pending = true;
    },
    getProductSuccess: (state, action) => {
      state.pending = false;
      state.products = action.payload.filter(
        (product) => state.products.indexOf(product) === -1
      );
      state.error = false;
    },
    getProductFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
    // DELETE
    deleteProductStart: (state) => {
      state.pending = true;
      state.error = false;
    },
    deleteProductSuccess: (state, action) => {
      state.pending = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteProductFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
    // UPDATE
    updateProductStart: (state) => {
      state.pending = true;
      state.error = false;
    },
    updateProductSuccess: (state, action) => {
      state.pending = false;
      state.products[
        state.products.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },
    updateProductFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
    // CREATE
    createProductStart: (state) => {
      state.pending = true;
      state.error = false;
    },
    createProductSuccess: (state, action) => {
      state.pending = false;
      state.products.push(action.payload);
    },
    createProductFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});

export const { getProductStart, getProductSuccess, getProductFailure } =
  productSlice.actions;
export default productSlice.reducer;
