const router = require('express').Router()
const authController = require('../controllers/authController')
const productController = require('../controllers/productController')

// Create Product
router.post(
  '/',
  authController.verifyTokenAndAdmin,
  productController.createProduct
)

// Update Product
router.put(
  '/:id',
  authController.verifyTokenAndAdmin,
  productController.updateProduct
)

// Delete Product
router.delete(
  '/:id',
  authController.verifyTokenAndAdmin,
  productController.deleteProduct
)

// Get Product
router.get('/find/:id', productController.getProduct)

// Get All Products
router.get('/', productController.getAllProducts)

module.exports = router
