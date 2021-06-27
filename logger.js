const fs = require('fs')

module.exports = myLogger = function(req, res, next) {
  let path = req.originalUrl
  let timestamp = new Date()
  let method = req.method
  fs.writeFileSync('server.log', `${timestamp} | ${method} FROM ${path}`)
  console.log(`Login info are ${timestamp} | ${method} FROM ${path}`)
  next()
}
