const Product = require('../models/Product')
const factory = require('./handlerFactory')

const createProduct = factory.createOne(Product)

const updateProduct = factory.updateOne(Product)

const deleteProduct = factory.deleteOne(Product)

const getProduct = factory.getOneById(Product)

// Get All Products
const getAllProducts = async (req, res) => {
  const qNew = req.query.new
  const qCategory = req.query.category
  try {
    let products
    if (qNew) {
      products = await Product.find().sort({ createdAt: -1 }).limit(5)
    } else if (qCategory) {
      products = await Product.find({
        categories: {
          $in: [qCategory],
        },
      })
    } else {
      products = await Product.find()
    }
    res.status(200).json(products)
  } catch (err) {
    res.status(500).json(err)
  }
}

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
}
