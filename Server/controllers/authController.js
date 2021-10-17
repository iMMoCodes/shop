const User = require('../models/User')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

// Register
const registerUser = async (req, res) => {
  try {
    const newUser = new User({
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      image: req.body.image,
      password: await bcrypt.hash(req.body.password, 12),
    })

    const savedUser = await newUser.save()
    res.status(201).json(savedUser)
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

// Login
const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    if (!user) {
      return res
        .status(401)
        .json({ status: 'error', message: 'Wrong credentials!' })
    }

    const userId = user._id.toString()
    const { username, firstName, lastName, image, email, isAdmin } = user
    const newUser = {
      userId,
      username,
      firstName,
      lastName,
      image,
      email,
      isAdmin,
    }

    const match = await bcrypt.compare(req.body.password, user.password)

    if (!match) {
      return res
        .status(401)
        .json({ status: 'error', message: 'Wrong credentials!' })
    }

    const accessToken = jwt.sign(
      {
        id: userId,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: '3d' }
    )

    res.status(200).json({ ...newUser, accessToken })
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

// Verify token
const verifyToken = async (req, res, next) => {
  try {
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
  } catch (err) {
    res.status(500).json({ status: 'error', err })
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
