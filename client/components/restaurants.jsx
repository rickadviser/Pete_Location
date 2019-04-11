import React from 'react';

class Restaurants extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    let count = 0;

    return (
      <div>
        <span className="restaurantHeaderContainer">
          <div className="restaurantCount">
            {this.props.restaurants.length}
          </div>
          <div className="restaurantHeader">Restaurants</div>
        </span>
        <span className="Contact">Nearby Restaurants</span>
        {this.props.restaurants.map(restaurant => {
          count = count + 1;
          if (count < 5) {
            return (<div>{restaurant.Name}</div>)
          }
        })}
      </div>
    );
  }
}

export default Restaurants;