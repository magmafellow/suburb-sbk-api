const express = require('express')
const router = express.Router()

const {
  getAllPlaces,
  getLocationPlaces,
  getLocationPlaceById
} = require('../controllers/places')

// localhost/api/v1/places 
// localhost/api/v1/places/RIVER/3  within all places we choose river with object 3
router.get('/', getAllPlaces)

router.get('/:location', getLocationPlaces)

router.get('/:location/:placeId', getLocationPlaceById)


module.exports = router
