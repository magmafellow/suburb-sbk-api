const express = require('express')
const path = require('path')
const morgan = require('morgan')

const placeRouter = require('./routes/places')

const app = express();

/**
 Middleware sectoin
 */

app.use(express.static(path.resolve(__dirname, './public')))
app.use(morgan('tiny'))
app.use('/api/v1/places', placeRouter)


// 404 handling
app.all('*', (req, res) => {
  return res.status(404).sendFile(path.resolve(__dirname, './not-found.html'))
})

app.listen(4789, (req, res) => {
  console.log(`Server is listening on port ${4789}...`)
})
