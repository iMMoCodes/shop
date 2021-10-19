const router = require('express').Router()
const authController = require('../controllers/authController')
const cartController = require('../controllers/cartController')

// Create Cart
router.post('/', cartController.createCart)

// Update Cart
router.patch('/:id', cartController.updateCart)

// Delete Cart
router.delete('/:id', cartController.deleteCart)

// Get User Cart
router.get('/find/:userId', authController.protect, cartController.getUserCart)

// Get All Carts
router.get(
  '/',
  authController.protect,
  authController.adminOnly,
  cartController.getAllCarts
)

module.exports = router
