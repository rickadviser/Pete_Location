import React from 'react';


class Attractions extends React.Component {


  render() {
    let count = 0;
    return (
      <div className="attractionsContainer">
        <span>
          <div className="attractionsCount">{this.props.attractions.length}</div>
          <div className="Contact">Nearby Attractions</div>
        </span>
        {this.props.attractions.map(attraction => {
          count++;
          if (count < 5) {
            return (<div>{attraction.Name}</div>)
          }
        })}
      </div>
    );
  }
}

export default Attractions;