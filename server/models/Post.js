let mongoose = require('mongoose')
let Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
let schemaName = 'Post'

let schema = new Schema({
  description: {
    type: String
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
  }
  //how does timestamp integrate on front end
})