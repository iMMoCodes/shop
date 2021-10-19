import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: null,
    pending: false,
    error: false,
    success: false,
  },
  reducers: {
    registerStart: (state) => {
      state.pending = true
      state.error = false
      state.success = false
    },
    registerSuccess: (state) => {
      state.pending = false
      state.currentUser = null
      state.error = false
      state.success = true
    },
    registerFailure: (state, action) => {
      state.pending = false
      state.error = action.payload
      state.success = false
    },
    loginStart: (state) => {
      state.pending = true
      state.success = false
    },
    loginSuccess: (state, action) => {
      state.pending = false
      state.currentUser = action.payload.user
      state.error = false
      state.success = true
    },
    loginFailure: (state, action) => {
      state.pending = false
      state.error = action.payload.message
      state.success = false
    },
    updateUserStart: (state) => {
      state.pending = true
    },
    updateUserSuccess: (state, action) => {
      state.pending = false
      state.currentUser = Object.assign(state.currentUser, action.payload)
      state.error = false
    },
    updateUserFailure: (state) => {
      state.pending = false
      state.error = true
    },
    logout: (state) => {
      state.pending = false
      state.currentUser = null
      state.error = false
      state.success = false
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
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  logout,
} = userSlice.actions
export default userSlice.reducer
