import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
  updateMeFailure,
  updateMeStart,
  updateMeSuccess,
  updateMyPasswordFailure,
  updateMyPasswordStart,
  updateMyPasswordSuccess,
} from './userRedux'
import { publicRequest, userRequest } from '../requestMethods'
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
} from './productRedux'

// LOGIN
export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const res = await publicRequest.post('/auth/login', user, {
      withCredentials: true,
    })
    dispatch(loginSuccess(res.data))
  } catch (err) {
    dispatch(loginFailure(err.response?.data))
  }
}

// REGISTER
export const register = async (dispatch, user) => {
  dispatch(registerStart())
  try {
    await publicRequest.post('/auth/register', user)
    dispatch(registerSuccess())
  } catch (err) {
    dispatch(registerFailure(err.response?.data))
  }
}

// UPDATE OTHERS EXCEPT PASSWORD
export const updateMe = async (dispatch, user) => {
  dispatch(updateMeStart())
  try {
    const res = await userRequest.patch(`/users/updateMe`, user, {
      withCredentials: true,
    })
    dispatch(updateMeSuccess(res.data))
  } catch (err) {
    dispatch(updateMeFailure(err.response?.data?.err?.errors))
  }
}

// UPDATE PASSWORD
export const updateMyPassword = async (dispatch, password) => {
  dispatch(updateMyPasswordStart())
  try {
    const res = await userRequest.patch('/auth/updateMyPassword', password, {
      withCredentials: true,
    })
    dispatch(updateMyPasswordSuccess(res.data))
  } catch (err) {
    dispatch(updateMyPasswordFailure(err.response.data?.err))
  }
}

// GET PRODUCTS
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
