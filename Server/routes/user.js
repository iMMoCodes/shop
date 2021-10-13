const router = require('express').Router()
const authController = require('../controllers/authController')
const userController = require('../controllers/userController')

// Update User
router.put(
  '/:id',
  authController.verifyTokenAndAuthorize,
  userController.updateUser
)

// Delete User
router.delete(
  '/:id',
  authController.verifyTokenAndAuthorize,
  userController.deleteUser
)

// Get User
router.get(
  '/find/:id',
  authController.verifyTokenAndAdmin,
  userController.getUser
)

// Get All Users
router.get('/', authController.verifyTokenAndAdmin, userController.getAllUsers)

// Get User Stats
router.get(
  '/stats',
  authController.verifyTokenAndAdmin,
  userController.getUserStats
)

module.exports = router
