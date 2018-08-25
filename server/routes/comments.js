let router = require('express').Router()
let Comments = require('../models/Comment')

router.get('/', (req, res, next) => {
  Comments.find({})
    .then(clist => {
      res.send(clist)
    }).catch(next)
})

router.post('/', (req, res, next) => {
  Comments.create(req.body)
    .then(post => {
      res.send(post)
    }).catch(next)
})

router.put('/:id', (req, res, next) => {
  Comments.findByIdAndUpdate(req.params.id, req.body)
    .then(() => res.send({
      message: 'Success'
    })).catch(next)
})

router.put('/:id/upvote', (req, res, next) => {
  Comments.findById(req.params.id)
    .then((comment) => {
      comment.vote++
      return comment.save()
    })
    .then(() => res.send({
      message: "You liked this comment."
    }))
    .catch(next)
})

router.put('/:id/downvote', (req, res, next) => {
  Comments.findById(req.params.id)
    .then((comment) => {
      comment.vote--
      return comment.save()
    })
    .then(() => res.send({
      message: "You did not like this comment."
    }))
    .catch(next)
})

router.delete('/:id', (req, res, next) => {
  Comments.findByIdAndRemove(req.params.id)
    .then(() => res.send({
      message: 'Deleted'
    })).catch(next)
})

module.exports = router