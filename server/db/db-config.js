let mongoose = require('mongoose')
const connectionString = 'mongodb://student:Student1@ds018558.mlab.com:18558/hackathon'
let connection = mongoose.connection

mongoose.connect(connectionString, {
  useNewUrlParser: true
})

connection.on('error', err => {
  console.log("DATABASE ERROR: ", err)
})

connection.once('open', () => {
  console.log("Connected to Database")
})