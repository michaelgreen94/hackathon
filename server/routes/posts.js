let router = require('express').Router()
let Posts = require('../models/Post')

router.get('/by-user/:userId', (req, res, next) => {
  Posts.find({
    userId: req.params.userId
  }).then(plist => {
    res.send(plist)
  }).catch(next)
})

