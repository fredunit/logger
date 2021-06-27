// app.js
const express = require('express')
const app = express()
const port = 3000

let myLogger = function(req, res, next) {
  let path = req.originalUrl
  let timestamp = new Date()
  let method = req.method
  console.log(`Login Time is ${timestamp} | ${method} FROM ${path}`)
  next()
}

app.use(myLogger)



app.get('/', (req, res) => {
  res.send('Hello World!')
  console.log(req._httpMessage)
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})
 
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})
