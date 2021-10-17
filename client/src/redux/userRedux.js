import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    pending: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.pending = true
    },
    loginSuccess: (state, action) => {
      state.pending = false
      state.currentUser = {
        username: action.payload.username,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        image: action.payload.image,
        _id: action.payload._id,
        isAdmin: action.payload.isAdmin,
      }
      state.error = false
    },
    loginFailure: (state) => {
      state.pending = false
      state.error = true
    },
    registerStart: (state) => {
      state.pending = true
    },
    registerSuccess: (state, action) => {
      state.pending = false
      state.currentUser = {
        username: action.payload.username,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        image: action.payload.image,
        _id: action.payload._id,
        isAdmin: action.payload.isAdmin,
      }
      state.error = false
    },
    registerFailure: (state) => {
      state.pending = false
      state.error = true
    },
    logout: (state) => {
      state.currentUser = null
      state.error = false
    },
  },
})

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  logout,
} = userSlice.actions
export default userSlice.reducer
