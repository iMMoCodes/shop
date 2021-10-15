import { loginFailure, loginStart, loginSuccess } from './userRedux'
import { publicRequest, userRequest } from '../requestMethods'
import {
  createProductFailure,
  createProductStart,
  createProductSuccess,
  deleteProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  getProductFailure,
  getProductStart,
  getProductSuccess,
  updateProductFailure,
  updateProductStart,
  updateProductSuccess,
} from './productRedux'
// LOGIN
export const login = async (dispatch, user) => {
  dispatch(loginStart())
  try {
    const res = await publicRequest.post('/auth/login', user)
    dispatch(loginSuccess(res.data))
  } catch (err) {
    dispatch(loginFailure())
  }
}
// GET PRODUCTS
export const getProducts = async (dispatch) => {
  dispatch(getProductStart())
  try {
    const res = await publicRequest.get('/products')
    dispatch(getProductSuccess(res.data))
  } catch (err) {
    dispatch(getProductFailure())
  }
}
// DELETE PRODUCT
export const deleteProduct = async (id, dispatch) => {
  dispatch(deleteProductStart())
  try {
    // await userRequest.delete(`/products/${id}`)
    dispatch(deleteProductSuccess(id))
  } catch (err) {
    dispatch(deleteProductFailure())
  }
}
// UPDATE PRODUCT
export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart())
  try {
    //await userRequest.put(`/products/${id}`)
    dispatch(updateProductSuccess({ id, product }))
  } catch (err) {
    dispatch(updateProductFailure())
  }
}
// CREATE PRODUCT
export const createProduct = async (product, dispatch) => {
  dispatch(createProductStart())
  try {
    const res = await userRequest.post(`/products/`, product)
    dispatch(createProductSuccess(res.data))
  } catch (err) {
    dispatch(createProductFailure())
  }
}
