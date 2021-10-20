const Wish = require('../models/Wishlist')
const factory = require('./handlerFactory')

const createWish = factory.createOne(Wish)

const deleteWish = factory.deleteOne(Wish)

const getUserWishes = factory.getByUserId(Wish, { path: 'product' })

module.exports = { createWish, deleteWish, getUserWishes }
