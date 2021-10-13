const User = require('../models/User')
const CryptoJS = require('crypto-js')

// Update User
const updateUser = async (req, res) => {
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.CRYPTO_SECRET
    ).toString()
  }
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    )
    const { password, ...others } = updatedUser._doc
    res.status(200).json({ status: 'success', ...others })
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

module.exports = { updateUser }
