import { createSlice } from '@reduxjs/toolkit';

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
      state.pending = true;
      state.error = false;
      state.success = false;
    },
    registerSuccess: (state) => {
      state.pending = false;
      state.currentUser = null;
      state.error = false;
      state.success = true;
    },
    registerFailure: (state, action) => {
      state.pending = false;
      state.error = action.payload;
      state.success = false;
    },
    loginStart: (state) => {
      state.pending = true;
      state.success = false;
    },
    loginSuccess: (state, action) => {
      state.pending = false;
      state.currentUser = action.payload.user;
      state.error = false;
      state.success = true;
    },
    loginFailure: (state, action) => {
      state.pending = false;
      state.error = action.payload.message;
      state.success = false;
    },
    updateMeStart: (state) => {
      state.pending = true;
      state.success = false;
    },
    updateMeSuccess: (state, action) => {
      state.pending = false;
      state.currentUser = action.payload;
      state.error = false;
      state.success = true;
    },
    updateMeFailure: (state, action) => {
      state.pending = false;
      state.error = action.payload;
      state.success = false;
    },
    updateMyPasswordStart: (state) => {
      state.pending = true;
      state.success = false;
    },
    updateMyPasswordSuccess: (state, action) => {
      state.pending = false;
      state.currentUser = action.payload.user;
      state.error = false;
      state.success = true;
    },
    updateMyPasswordFailure: (state, action) => {
      state.pending = false;
      state.error = action.payload;
      state.success = false;
    },
    logout: (state) => {
      state.pending = false;
      state.currentUser = null;
      state.error = false;
      state.success = false;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  registerStart,
  registerSuccess,
  registerFailure,
  updateMeStart,
  updateMeSuccess,
  updateMeFailure,
  updateMyPasswordStart,
  updateMyPasswordSuccess,
  updateMyPasswordFailure,
  logout,
} = userSlice.actions;
export default userSlice.reducer;
