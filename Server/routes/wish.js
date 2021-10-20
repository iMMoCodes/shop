const router = require('express').Router()
const authController = require('../controllers/authController')
const wishController = require('../controllers/wishController')

// Create Wish
router.post('/', authController.protect, wishController.createWish)

// Delete Wish
router.delete('/:id', authController.protect, wishController.deleteWish)

// Get User Wishes
router.get(
  '/find/:userId',
  authController.protect,
  wishController.getUserWishes
)

module.exports = router
