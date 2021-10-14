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
    },
    loginFailure: (state) => {
      state.pending = false
      state.error = true
    },
  },
})

export const { loginStart, loginSuccess, loginFailure } = userSlice.actions
export default userSlice.reducer
