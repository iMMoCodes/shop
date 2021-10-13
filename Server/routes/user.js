const router = require('express').Router()
const authController = require('../controllers/authController')
const userController = require('../controllers/userController')

router.put(
  '/:id',
  authController.verifyTokenAndAuthorize,
  userController.updateUser
)

module.exports = router
