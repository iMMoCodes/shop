const mongoose = require('mongoose')

const wishSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    product: {
      type: mongoose.Schema.ObjectId,
      ref: 'Product',
    },
  },
  { timestamps: true }
)

const Wish = mongoose.model('Wish', wishSchema)
module.exports = Wish
