const crypto = require('crypto')
const { promisify } = require('util')
const User = require('../models/User')
const jwt = require('jsonwebtoken')
const sendEmail = require('../utils/email')

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET)
}

const createSendToken = (user, statusCode, res) => {
  const userId = user._id.toString()
  const token = signToken(userId)

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    // secure: true,
    // httpOnly: true,
  }

  res.cookie('jwt', token, cookieOptions)

  user.password = undefined

  res.status(statusCode).json({
    status: 'success',
    token,
    user,
  })
}

// Register
const registerUser = async (req, res) => {
  try {
    const newUser = await User.create({
      username: req.body.username,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      image: req.body.image,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
      passwordChangedAt: req.body.passwordChangedAt,
      passwordResetToken: req.body.passwordResetToken,
      passwordResetExpires: req.body.passwordResetExpires,
    })
    createSendToken(newUser, 201, res)
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

// Login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({
        status: 'error',
        message: 'Please provide email and password!',
      })
    }

    const user = await User.findOne({ email }).select('+password')

    if (!user || !(await user.correctPassword(password, user.password))) {
      return res.status(401).json({
        status: 'error',
        message: 'Incorrect email or password',
      })
    }
    createSendToken(user, 200, res)
  } catch (err) {
    res.status(500).json({ status: 'error', err })
  }
}

const protect = async (req, res, next) => {
  try {
    if (req.cookies.jwt) {
      const decoded = await promisify(jwt.verify)(
        req.cookies.jwt,
        process.env.JWT_SECRET
      )

      const currentUser = await User.findById(decoded.id)
      if (!currentUser) {
        return next()
      }

      if (currentUser.changedPasswordAfter(decoded.iat)) {
        return next()
      }
      const id = currentUser._id.toString()
      const editedUser = { ...currentUser._doc, _id: id }
      req.user = editedUser

      return next()
    }
    next()
  } catch (err) {
    return res.status(500).json({ status: 'err', err })
  }
}

const adminOnly = (req, res, next) => {
  if (!req.user.isAdmin) {
    return res.status(403).json({
      status: 'error',
      message: `You don't have permission to perform this action.`,
    })
  }
  next()
}

const forgotPassword = async (req, res, next) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'There is no user with that email address.',
      })
    }

    const resetToken = user.createPasswordResetToken()
    await user.save({ validateBeforeSave: false })

    const resetURL = `${req.protocol}://${req.get(
      'host'
    )}/api/v1/auth/resetPassword/${resetToken}`

    const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}. 
    \nIf you didn't forgot your password, please ignore this email.`

    try {
      await sendEmail({
        email: user.email,
        subject: 'Your password reset token (valid for 10min)',
        message,
      })
      res
        .status(200)
        .json({ status: 'success', message: 'Token sent to email!' })
    } catch (err) {
      user.passwordResetToken = undefined
      user.passwordResetExpires = undefined
      await user.save({ validateBeforeSave: false })
      return next(
        res.status(500).json({
          status: 'error',
          message: 'There was an error sending the email. Try again later!',
        })
      )
    }
  } catch (err) {
    return res.status(500).json({ status: 'err', err })
  }
}
const resetPassword = async (req, res, next) => {
  try {
    const hashedToken = crypto
      .createHash('sha256')
      .update(req.params.token)
      .digest('hex')

    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    })

    if (!user) {
      return next(
        res.status(400).json({
          status: 'error',
          message: 'Token is invalid or has expired.',
        })
      )
    }

    user.password = req.body.password
    user.passwordConfirm = req.body.passwordConfirm
    user.passwordResetToken = undefined
    user.passwordResetExpires = undefined
    await user.save()

    createSendToken(user, 200, res)
  } catch (err) {
    return res.status(500).json({ status: 'err', err })
  }
}

const updatePassword = async (req, res, next) => {
  try {
    const user = await User.findById(req.user._id).select('+password')

    if (
      !(await user.correctPassword(req.body.passwordCurrent, user.password))
    ) {
      return next(
        res.status(401).json({
          status: 'error',
          message: 'Your current password is wrong.',
        })
      )
    }

    user.password = req.body.password
    user.passwordConfirm = req.body.passwordConfirm
    await user.save()

    createSendToken(user, 200, res)
  } catch (err) {
    return res.status(500).json({ status: 'err', err })
  }
}

module.exports = {
  registerUser,
  loginUser,
  protect,
  adminOnly,
  forgotPassword,
  resetPassword,
  updatePassword,
}
