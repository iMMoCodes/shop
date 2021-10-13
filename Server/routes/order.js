const router = require('express').Router()
const authController = require('../controllers/authController')
const orderController = require('../controllers/orderController')

// Create Order
router.post('/', authController.verifyToken, orderController.createOrder)

// Update Order
router.put(
  '/:id',
  authController.verifyTokenAndAdmin,
  orderController.updateOrder
)

// Delete Order
router.delete(
  '/:id',
  authController.verifyTokenAndAdmin,
  orderController.deleteOrder
)

// Get User Orders
router.get(
  '/find/:userId',
  authController.verifyTokenAndAuthorize,
  orderController.getUserOrders
)

// Get All Orders
router.get(
  '/',
  authController.verifyTokenAndAdmin,
  orderController.getAllOrders
)

// Get Monthly Income
router.get(
  '/income',
  authController.verifyTokenAndAdmin,
  orderController.getMonthlyIncome
)

module.exports = router
