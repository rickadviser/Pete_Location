import React from 'react';


class Map extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('http://localhost:3003/location/restaurants')
      .then(response => response.json())
      .then((data) => {
        this.updateMap(data);


      });
  }


  updateMap(restaurants) {
    let locations = [];
    let count = 1;
    console.log('RESTAURANT COUNT', restaurants.length);
    restaurants.forEach((restaurant) => {
      let restaurantLatLong = [restaurant.Name, restaurant.Latitude, restaurant.Longitude, count];
      console.log('Restaurant', restaurant.Name);
      count++;
      locations.push(restaurantLatLong);
    });

    const map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 40.3772, lng: -105.52 },
      zoom: 13,
    });

    const infowindow = new window.google.maps.InfoWindow();

    let marker;
    let i;

    for (i = 0; i < locations.length; i++) {
      marker = new window.google.maps.Marker({
        position: new window.google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map
      });

      window.google.maps.event.addListener(marker, 'click', (function (marker, i) {
        return function () {
          infowindow.setContent(locations[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }
  }

  render() {

    return (
      <div style={{ width: 700, height: 400 }} id="map" />
    );
  }
}

export default Map;