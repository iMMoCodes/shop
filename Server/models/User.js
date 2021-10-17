const mongoose = require('mongoose')
const validator = require('validator')

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, 'Please provide a valid email.'],
    },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      default: 'default.jpg',
    },
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  { timestamps: true }
)

module.exports = mongoose.model('User', UserSchema)
