// app.js
const express = require('express')
const app = express()
const port = 3000
const fs = require('fs')


app.use((req, res, next) => {
  const beginn = new Date()
  next()
  const end = new Date()
  const diff = (beginn - end).toLocaleString()
  const log = `${beginn} | ${req.method} from ${req.originalUrl} | total time: ${diff}`
  console.log(log)
  next()
  fs.appendFile('serverLog.txt', log + "\n", err => {
    if (err) {
      console.log(err)
    }
  })
  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
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