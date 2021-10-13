const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')

const app = express()

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log('DB connection successful!'))
  .catch((err) => console.log(err))

app.use(express.json())
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/users', userRoute)
app.use('/api/v1/products', productRoute)

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`Backend server is running on port ${port}!`)
})
