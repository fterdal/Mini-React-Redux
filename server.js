const express = require('express')
const volleyball = require('volleyball')

const app = express()
app.use(volleyball)

app.get('/', (req, res, next) => {
  // const counter = Number(req.params.counter);
  const MIN = 1
  const MAX = 100
  const counter = Math.floor(Math.random() * (MAX - MIN) + MIN);
  res.json({ counter })
})

const PORT = 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})
