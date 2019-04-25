const url = 'localhost:27017/rickadvisor-location';
const db = require('monk')(url);

const hotels = db.get('hotels');
const attractions = db.get('attractions');
const getRelativeDistance = (latitude, longitude) => {
  let latLow;
  let latHigh;
  let longLow;
  let longHigh;
  latLow = latitude - 0.1;
  latHigh = latitude + 0.1;
  longLow = longitude - 0.1;
  longHigh = longitude + 0.1;
  return [latLow, latHigh, longLow, longHigh];
};
module.exports = {
  hotels: {
    getHotelByName: hotelName => hotels.find({ name: `${hotelName}` }).then(hotel => hotel[0]),
  },
  attractions: {
    getAttractions: (hotelName, type) => hotels
      .find({ name: `${hotelName}` })
      .then(hotel => hotel[0])
      .then(async (hotel) => {
        const hotelLatitude = hotel.latitude;
        const hotelLongitude = hotel.longitude;
        const [latLow, latHigh, longLow, longHigh] = getRelativeDistance(
          hotelLatitude,
          hotelLongitude,
        );
        return attractions.find({
          latitude: { $gte: latLow, $lte: latHigh },
          longitude: { $gte: longLow, $lte: longHigh },
          type,
        });
      }),
    getRestaurants: (hotelName) => {},
  },
};
