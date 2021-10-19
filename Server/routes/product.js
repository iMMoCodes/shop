const router = require('express').Router()
const authController = require('../controllers/authController')
const productController = require('../controllers/productController')

// Create Product
router.post(
  '/',
  authController.protect,
  authController.adminOnly,
  productController.createProduct
)

// Update Product
router.patch(
  '/:id',
  authController.protect,
  authController.adminOnly,
  productController.updateProduct
)

// Delete Product
router.delete(
  '/:id',
  authController.protect,
  authController.adminOnly,
  productController.deleteProduct
)

// Get Product
router.get('/find/:id', productController.getProduct)

// Get All Products
router.get('/', productController.getAllProducts)

module.exports = router
