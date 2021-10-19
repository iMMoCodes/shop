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
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
} from './productRedux'

export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const res = await publicRequest.post('/auth/login', user, {
      withCredentials: true,
    })
    dispatch(loginSuccess(res.data))
  } catch (err) {
    dispatch(loginFailure(err.response.data))
  }
}

export const register = async (dispatch, user) => {
  dispatch(registerStart())
  try {
    await publicRequest.post('/auth/register', user)
    dispatch(registerSuccess())
  } catch (err) {
    dispatch(registerFailure(err.response?.data))
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

export const getProducts = async (dispatch, category) => {
  dispatch(getProductStart())
  try {
    const res = category
      ? await publicRequest.get(`/products?category=${category}`)
      : await publicRequest.get('/products')
    dispatch(getProductSuccess(res.data))
  } catch (err) {
    dispatch(getProductFailure())
  }
}
