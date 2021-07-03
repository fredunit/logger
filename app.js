// app.js
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const routes = express.Router()
const myLogger = require('./logger')

app.use(myLogger)
app.use(routes)
app.use(express.urlencoded({ extended: true }))


app.get('/', async (req, res) => {
  res.send('Hello World!')
  res.status(201).end()
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
  res.status(201).end()
})
 
app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
  res.status(201).end()
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
  res.status(201).end()
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
})

