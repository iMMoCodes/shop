const router = require('express').Router()
const authController = require('../controllers/authController')
const cartController = require('../controllers/cartController')

// Create Cart
router.post('/', authController.verifyToken, cartController.createCart)

// Update Cart
router.put(
  '/:id',
  authController.verifyTokenAndAuthorize,
  cartController.updateCart
)

// Delete Cart
router.delete(
  '/:id',
  authController.verifyTokenAndAuthorize,
  cartController.deleteCart
)

// Get User Cart
router.get(
  '/find/:userId',
  authController.verifyTokenAndAuthorize,
  cartController.getUserCart
)

// Get All Carts
router.get('/', authController.verifyTokenAndAdmin, cartController.getAllCarts)

module.exports = router
