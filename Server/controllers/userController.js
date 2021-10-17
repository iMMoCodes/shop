const User = require('../models/User')
const bcrypt = require('bcrypt')

// Update User
const updateUser = async (req, res) => {
  try {
    if (req.body.password) {
      req.body.password = await bcrypt.hash(req.body.password, 12)
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
    const { password, ...others } = updatedUser._doc
    res.status(200).json({ ...others })
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

// Delete User
const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    res
      .status(200)
      .json({ status: 'success', message: 'User has been deleted!' })
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

// Get User
const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const { password, ...others } = user._doc
    res.status(200).json(...others)
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

// Get All Users
const getAllUsers = async (req, res) => {
  const query = req.query.new
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find()
    res.status(200).json(users)
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

// Get User Stats
const getUserStats = async (req, res) => {
  const date = new Date()
  const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))

  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastYear } } },
      {
        $project: {
          month: { $month: '$createdAt' },
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 },
        },
      },
    ])
    res.status(200).json(data)
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

module.exports = { updateUser, deleteUser, getUser, getAllUsers, getUserStats }
