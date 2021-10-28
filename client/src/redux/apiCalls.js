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
} from './userRedux';
import { publicRequest, userRequest } from '../requestMethods';
import {
  getProductFailure,
  getProductStart,
  getProductSuccess,
} from './productRedux';
import {
  addWishStart,
  addWishSuccess,
  addWishFailure,
  deleteWishStart,
  deleteWishSuccess,
  getWishesStart,
  getWishesSuccess,
  getWishesFailure,
  deleteWishFailure,
} from './wishRedux';

// LOGIN
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post('/auth/login', user, {
      withCredentials: true,
    });
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure(err.response?.data));
  }
};

// REGISTER
export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    await publicRequest.post('/auth/register', user, {
      withCredentials: true,
    });
    dispatch(registerSuccess());
  } catch (err) {
    dispatch(registerFailure(err.response?.data));
  }
};

// UPDATE OTHERS EXCEPT PASSWORD
export const updateMe = async (dispatch, user) => {
  dispatch(updateMeStart());
  try {
    const res = await userRequest.patch(`/users/updateMe`, user, {
      withCredentials: true,
    });
    dispatch(updateMeSuccess(res.data));
  } catch (err) {
    dispatch(updateMeFailure(err.response?.data?.err?.errors));
  }
};

// UPDATE PASSWORD
export const updateMyPassword = async (dispatch, password) => {
  dispatch(updateMyPasswordStart());
  try {
    const res = await userRequest.patch('/auth/updateMyPassword', password, {
      withCredentials: true,
    });
    dispatch(updateMyPasswordSuccess(res.data));
  } catch (err) {
    dispatch(updateMyPasswordFailure(err.response.data));
  }
};

// GET PRODUCTS
export const getProducts = async (dispatch, category) => {
  dispatch(getProductStart());
  try {
    const res = category
      ? await publicRequest.get(`/products?category=${category}`)
      : await publicRequest.get('/products');
    dispatch(getProductSuccess(res.data));
  } catch (err) {
    dispatch(getProductFailure());
  }
};
// // DELETE PRODUCT
// export const deleteProduct = async (id, dispatch) => {
//   dispatch(deleteProductStart());
//   try {
//     await userRequest.delete(`/products/${id}`, {
//       withCredentials: true,
//     });
//     dispatch(deleteProductSuccess(id));
//   } catch (err) {
//     dispatch(deleteProductFailure());
//   }
// };
// // UPDATE PRODUCT
// export const updateProduct = async (id, product, dispatch) => {
//   dispatch(updateProductStart())
//   try {
//     await userRequest.patch(`/products/${id}`)
//     dispatch(updateProductSuccess({ id, product }))
//   } catch (err) {
//     dispatch(updateProductFailure())
//   }
// }
// // CREATE PRODUCT
// export const createProduct = async (product, dispatch) => {
//   dispatch(createProductStart())
//   try {
//     const res = await userRequest.post(`/products/`, product)
//     dispatch(createProductSuccess(res.data))
//   } catch (err) {
//     dispatch(createProductFailure())
//   }
// }

// ADD TO WISHLIST
export const addWishList = async (dispatch, userId, product) => {
  dispatch(addWishStart());
  try {
    await userRequest.post(
      '/wish/',
      { userId, product },
      {
        withCredentials: true,
      }
    );
    dispatch(addWishSuccess());
  } catch (err) {
    dispatch(addWishFailure());
  }
};

// DELETE FROM WISHLIST
export const deleteWishList = async (dispatch, productId) => {
  dispatch(deleteWishStart());
  try {
    await userRequest.delete(`/wish/${productId}`, {
      withCredentials: true,
    });
    dispatch(deleteWishSuccess(productId));
  } catch (err) {
    dispatch(deleteWishFailure());
  }
};

// GET WISHLIST
export const getWishList = async (dispatch, userId) => {
  dispatch(getWishesStart());
  try {
    const res = await userRequest.get(`/wish/find/${userId}`, {
      withCredentials: true,
    });
    dispatch(getWishesSuccess(res.data));
  } catch (err) {
    dispatch(getWishesFailure());
  }
};
