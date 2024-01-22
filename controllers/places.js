const path = require('node:path')
const { places } = require('../data')

const getAllPlaces = (req, res) => {
  res.status(200).json({ correct: true, data: places })
}
const getLocationPlaces = (req, res) => {
  const { location } = req.params
  const locationPlaces = places.filter(place => place.tag === location)
  if(locationPlaces.length === 0) {
    // return res.status(404).sendFile(path.resolve(__dirname, '../not-found.html'))
    return res.status(404).send(`Ooops no places with location of ${location}`)
  }
  res.status(200).json({ correct: true, data: locationPlaces })
}

const getLocationPlaceById = (req, res) => {
  const { location, placeId } = req.params
  const place = places.find((place) => place.tag === location && place.tagId === Number(placeId))
  if(!place){
    return res.status(404).send(`No place with id of ${placeId} or ${location} is wrong`)
  }
  res
    .status(200)
    .json({ correct: true, data: place })
}

module.exports = {
  getAllPlaces,
  getLocationPlaces,
  getLocationPlaceById,
}
