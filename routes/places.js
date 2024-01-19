const express = require('express')
const router = express.Router()

const { places } = require('../data')

// localhost/api/v1/places 
// localhost/api/v1/places/RIVER/3  within all places we choose river with object 3
router.get('/', (req, res) => {
  res.status(200).json({okay: true, data: places})
})

router.get('/:location', (req, res) => {
  const { placename } = req.params
  res.status(200).json({okay: true})
})

router.get('/:placename/:placeID', (req, res) => {
  const { placename, placeID } = req.params
  res.status(200).json({ okay: true, data: { place: placename, placeID: placeID } })
})


module.exports = router
