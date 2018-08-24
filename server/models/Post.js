let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Post'

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
    type: String,
    default: Date.now()
  },
  vote: {
    type: Number,
    default: 0
  }
  //how does timestamp integrate on front end
})

module.exports = mongoose.model(schemaName, schema)