let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Comment'

let schema = new Schema({
  description: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    ref: 'User',
    default: 'Anon'
  },
  userId: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  postId: {
    type: ObjectId,
    ref: "Post",
    required: true
  },
  imgUrl: {
    type: String
  },
  timestamp: {
    type: String,
    default: Date.now()
  },
  vote: {
    type: Number,
    default: 0
  }
  //vote type something else?
})

module.exports = mongoose.model(schemaName, schema)