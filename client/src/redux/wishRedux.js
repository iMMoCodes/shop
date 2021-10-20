import { createSlice } from '@reduxjs/toolkit'

const wishSlice = createSlice({
  name: 'wishlist',
  initialState: {
    wishList: [],
    pending: false,
    error: false,
  },
  reducers: {
    getWishesStart: (state) => {
      state.pending = true
      state.error = false
    },
    getWishesSuccess: (state, action) => {
      state.pending = false
      state.wishList = action.payload
      state.error = false
    },
    getWishesFailure: (state) => {
      state.pending = false
      state.error = true
    },
    addWishStart: (state) => {
      state.pending = true
      state.error = false
    },
    addWishSuccess: (state) => {
      state.pending = false
      state.error = false
    },
    addWishFailure: (state) => {
      state.pending = false
      state.error = true
    },
    deleteWishStart: (state) => {
      state.pending = true
      state.error = false
    },
    deleteWishSuccess: (state, action) => {
      state.pending = false
      state.wishList = state.wishList.filter(
        (item) => item._id !== action.payload
      )
      state.error = false
    },
    deleteWishFailure: (state) => {
      state.pending = false
      state.error = true
    },
  },
})

export const {
  getWishesStart,
  getWishesSuccess,
  getWishesFailure,
  addWishStart,
  addWishSuccess,
  addWishFailure,
  deleteWishStart,
  deleteWishSuccess,
  deleteWishFailure,
} = wishSlice.actions
export default wishSlice.reducer
