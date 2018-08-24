let express = require('express')
let bp = require('body-parser')
require('./db/db-config')
let server = express()
let port = 3000

server.use(bp.json())
server.use(bp.urlencoded(({
  extended: true
})))
server.use(express.static(__dirname + '/../www/'))

//ROUTES
let postRoutes = require('./routes/posts')

server.use('/auth', postRoutes)




server.listen(port, () => {
  console.log('Listening on Port: ', port)
})