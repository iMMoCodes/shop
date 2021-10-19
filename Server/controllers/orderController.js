const Order = require('../models/Order')
const factory = require('./handlerFactory')

const createOrder = factory.createOne(Order)

const updateOrder = factory.updateOne(Order)

const deleteOrder = factory.deleteOne(Order)

const getUserOrders = factory.getByUserId(Order)

const getAllOrders = factory.getAllBasic(Order)

// Get Monthly Income
const getMonthlyIncome = async (req, res) => {
  const productId = req.query.pid
  const date = new Date()
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1))
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))

  try {
    const income = await Order.aggregate([
      {
        $match: {
          createdAt: { $gte: previousMonth },
          ...(productId && {
            products: { $elemMatch: { productId } },
          }),
        },
      },
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
    res.status(200).json(income)
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
