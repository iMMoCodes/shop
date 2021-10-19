const router = require('express').Router()
const authController = require('../controllers/authController')

// Register
router.post('/register', authController.registerUser)

// Login
router.post('/login', authController.loginUser)

// Forgot Password
router.post('/forgotPassword', authController.forgotPassword)
router.patch('/resetPassword/:token', authController.resetPassword)

// Update Password
router.patch(
  '/updateMyPassword',
  authController.protect,
  authController.updatePassword
)

module.exports = router
