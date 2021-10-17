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
      state.currentUser = action.payload
      state.error = false
    },
    loginFailure: (state) => {
      state.pending = false
      state.error = true
    },
    logout: (state) => {
      state.currentUser = null
      state.error = false
    },
  },
})

export const { loginStart, loginSuccess, loginFailure, logout } =
  userSlice.actions
export default userSlice.reducer
