const router = require('express').Router()
const authController = require('../controllers/authController')
const userController = require('../controllers/userController')

router.put(
  '/:id',
  authController.verifyTokenAndAuthorize,
  userController.updateUser
)

router.delete(
  '/:id',
  authController.verifyTokenAndAuthorize,
  userController.deleteUser
)

router.get(
  '/find/:id',
  authController.verifyTokenAndAdmin,
  userController.getUser
)

router.get('/', authController.verifyTokenAndAdmin, userController.getAllUsers)
router.get(
  '/stats',
  authController.verifyTokenAndAdmin,
  userController.getUserStats
)

module.exports = router
