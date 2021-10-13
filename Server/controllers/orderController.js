const Order = require('../models/Order')

// Create Order
const createOrder = async (req, res) => {
  const newOrder = new Order(req.body)
  try {
    const savedOrder = await newOrder.save()
    res.status(201).json({ status: 'success', savedOrder })
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

// Update Order
const updateOrder = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
    res.status(200).json({ status: 'success', updatedOrder })
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

// Delete Order
const deleteOrder = async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id)
    res
      .status(200)
      .json({ status: 'success', message: 'Order has been deleted!' })
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

// Get User Orders
const getUserOrders = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.params.userId })
    res.status(200).json({ status: 'success', orders })
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

// Get All Orders
const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find()
    res.status(200).json({ status: 'success', orders })
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

// Get Monthly Income
const getMonthlyIncome = async (req, res) => {
  const date = new Date()
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: '$createdAt' },
          sales: '$amount',
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: '$sales' },
        },
      },
    ])
    res.status(200).json({ status: 'success', income })
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

module.exports = {
  createOrder,
  updateOrder,
  deleteOrder,
  getUserOrders,
  getAllOrders,
  getMonthlyIncome,
}