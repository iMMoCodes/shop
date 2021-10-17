import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from './userRedux'
import { publicRequest, userRequest } from '../requestMethods'

export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const res = await publicRequest.post('/auth/login', user)
    dispatch(loginSuccess(res.data))
  } catch (err) {
    dispatch(loginFailure())
  }
}

export const register = async (dispatch, user) => {
  dispatch(registerStart())
  try {
    await publicRequest.post('/auth/register', user)
    dispatch(registerSuccess())
  } catch (err) {
    dispatch(registerFailure())
  }
}

export const updateUser = async (dispatch, id, user, token) => {
  dispatch(updateUserStart())
  try {
    const res = await userRequest.put(`/users/${id}`, user, {
      headers: { authorization: `Bearer ${token}` },
    })
    dispatch(updateUserSuccess(res.data))
  } catch (err) {
    dispatch(updateUserFailure())
  }
}
