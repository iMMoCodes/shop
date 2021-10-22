const router = require('express').Router()
const authController = require('../controllers/authController')
const userController = require('../controllers/userController')

// Send newsletter
router.post('/newsletter/', userController.sendNewsLetter)

// Update Me
router.patch('/updateMe', authController.protect, userController.updateMe)

// Delete Me
router.delete('/deleteMe', authController.protect, userController.deleteMe)

// Update User
router.patch(
  '/:id',
  authController.protect,
  authController.adminOnly,
  userController.updateUser
)

// Delete User
router.delete(
  '/:id',
  authController.protect,
  authController.adminOnly,
  userController.deleteUser
)

// Get User
router.get(
  '/find/:id',
  authController.protect,
  authController.adminOnly,
  userController.getUser
)

// Get All Users
router.get(
  '/',
  authController.protect,
  authController.adminOnly,
  userController.getAllUsers
)

// Get User Stats
router.get(
  '/stats',
  authController.protect,
  authController.adminOnly,
  userController.getUserStats
)

module.exports = router
