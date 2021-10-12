const router = require('express').Router()

router.get('/usertest', (req, res) => {
  res.send('test is successful')
})

router.post('/userposttest', (req, res) => {
  const username = req.body.username
  res.status(200).json({
    status: 'success',
  })
})

module.exports = router
