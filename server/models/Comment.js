let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Comment'

let schema = new Schema({
  description: {
    type: String,
    required: true
  },
  userId: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  imgUrl: {
    type: String
  },
  timestamp: {
    type: String
  },
  vote: {
    type: String
  }
  //vote type something else?
})