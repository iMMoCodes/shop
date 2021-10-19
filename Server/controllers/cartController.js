const Cart = require('../models/Cart')
const factory = require('./handlerFactory')

const createCart = factory.createOne(Cart)

const updateCart = factory.updateOne(Cart)

const deleteCart = factory.deleteOne(Cart)

const getUserCart = factory.getByUserId(Cart)

const getAllCarts = factory.getAllBasic(Cart)

module.exports = {
  createCart,
  updateCart,
  deleteCart,
  getUserCart,
  getAllCarts,
}
