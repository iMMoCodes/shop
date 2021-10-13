const Product = require('../models/Product')

// Create Product
const createProduct = async (req, res) => {
  const newProduct = new Product(req.body)

  try {
    const savedProduct = await newProduct.save()
    res.status(201).json({ status: 'success', savedProduct })
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

// Update Product
const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json({ status: 'success', updatedProduct })
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

// Delete Product
const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id)
    res
      .status(200)
      .json({ status: 'success', message: 'Product has been deleted!' })
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

// Get Product
const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
    res.status(200).json({ status: 'success', product })
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

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
    res.status(200).json({ status: 'success', products })
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getProduct,
  getAllProducts,
}
