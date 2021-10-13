const User = require('../models/User')
const CryptoJS = require('crypto-js')
const jwt = require('jsonwebtoken')

// Register
const registerUser = async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.CRYPTO_SECRET
    ).toString(),
  })

  try {
    const savedUser = await newUser.save()
    res.status(201).json({
      status: 'success',
      savedUser,
    })
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

// Login
const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    !user &&
      res.status(401).json({ status: 'error', message: 'Wrong credentials!' })

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.CRYPTO_SECRET
    )
    const Originalpassword = hashedPassword.toString(CryptoJS.enc.Utf8)
    Originalpassword !== req.body.password &&
      res.status(401).json({ status: 'error', message: 'Wrong credentials!' })

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: '3d' }
    )
    const { password, ...others } = user._doc

    res.status(200).json({ status: 'success', ...others, accessToken })
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

// Verify token
const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token
  if (authHeader) {
    const token = authHeader.split(' ')[1]
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err)
        res
          .status(403)
          .json({ status: 'error', message: 'Token is not valid!' })
      req.user = user
      next()
    })
  } else {
    return res
      .status(401)
      .json({ status: 'error', message: 'You are not authenticated!' })
  }
}

// Verify and Authorization
const verifyTokenAndAuthorize = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next()
    } else {
      res
        .status(403)
        .json({ status: 'error', message: 'Action is not authorized!' })
    }
  })
}

// Verify and Admin
const verifyTokenAndAdmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next()
    } else {
      res
        .status(403)
        .json({ status: 'error', message: 'Action is not authorized!' })
    }
  })
}

module.exports = {
  registerUser,
  loginUser,
  verifyToken,
  verifyTokenAndAuthorize,
  verifyTokenAndAdmin,
}
