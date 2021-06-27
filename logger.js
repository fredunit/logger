const fs = require('fs')
const getFullTime = start => {
  const NS_PER_SEC = 1e9 
  const NS_TO_MS = 1e6 
  const diff = process.hrtime(start) //calculating the time relatively
  return (diff[0] * NS_PER_SEC + diff[1]) / NS_TO_MS //resulted in 3 decimal digits
}


module.exports = myLogger = function(req, res, next) {
  let path = req.url

  let timestamp = new Date()
  let formatTime = 
  timestamp.getFullYear() + '-' +
  (timestamp.getMonth() + 1) + '-' +
  timestamp.getDate() + ' ' +
  ('0' + timestamp.getHours()).slice(-2) + ":" +
  ('0' + timestamp.getMinutes()).slice(-2) + ':' +
  timestamp.getSeconds()

  let method = req.method
  let start = process.hrtime()
  const toMS = getFullTime(start)
    let log = `Login info are ${formatTime} | ${method} FROM ${path} | total time: ${toMS.toLocaleString()} ms`
  fs.appendFile('serverLog.txt', log + "\n", err => {
    if (err) {
      console.log(err)
    }
  })
  console.log(log)
  next()
}
