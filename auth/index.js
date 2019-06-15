const express = require('express')
const router = express.Router()

router.get('/login', function (req, res) {
  res.send('login page')
})

router.get('/logout', function (req, res) {
  res.send('logout page')
})

router.get('/revovery', function (req, res) {
    res.send('recovery page')
  })

module.exports = router