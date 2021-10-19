const router = require('express').Router()
const authController = require('../controllers/authController')
const orderController = require('../controllers/orderController')

// Create Order
router.post('/', authController.protect, orderController.createOrder)

// Update Order
router.patch(
  '/:id',
  authController.protect,
  authController.adminOnly,
  orderController.updateOrder
)

// Delete Order
router.delete(
  '/:id',
  authController.protect,
  authController.adminOnly,
  orderController.deleteOrder
)

// Get User Orders
router.get(
  '/find/:userId',
  authController.protect,
  orderController.getUserOrders
)

// Get All Orders
router.get(
  '/',
  authController.protect,
  authController.adminOnly,
  orderController.getAllOrders
)

// Get Monthly Income
router.get(
  '/income',
  authController.protect,
  authController.adminOnly,
  orderController.getMonthlyIncome
)

module.exports = router
