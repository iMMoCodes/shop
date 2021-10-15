const Cart = require('../models/Cart')

// Create Cart
const createCart = async (req, res) => {
  const newCart = new Cart(req.body)
  try {
    const savedCart = await newCart.save()
    res.status(201).json(savedCart)
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

// Update Cart
const updateCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json(updatedCart)
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

// Delete Cart
const deleteCart = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id)
    res
      .status(200)
      .json({ status: 'success', message: 'Cart has been deleted!' })
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

// Get User Cart
const getUserCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ userId: req.params.userId })
    res.status(200).json(cart)
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

// Get All Carts
const getAllCarts = async (req, res) => {
  try {
    const carts = await Cart.find()
    res.status(200).json(carts)
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

module.exports = {
  createCart,
  updateCart,
  deleteCart,
  getUserCart,
  getAllCarts,
}
