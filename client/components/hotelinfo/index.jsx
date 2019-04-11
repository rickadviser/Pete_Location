import React from 'react';
import './style.css';


class HotelInfo extends React.Component {

  render() {
    return (
      <div>
        <span classname="walkingScoreContainer">
          <div className="walkingScore">76</div>
          <div className="walkingScore1">Somewhat walkable</div>
          <div className="walkingScore2">Grade: {this.props.hotels[0].WalkableScore} out of 100<br /></div>
        </span>

        <span className="Contact"> <br />Contact<br /></span>
        <span>{this.props.hotels[0].Addr1},{this.props.hotels[0].City},{this.props.hotels[0].State},{this.props.hotels[0].PostalCode}<br /></span>
        <span>{this.props.hotels[0].Phone} <p></p></span>
        <span className="Contact">Getting There<br /></span>
        <span>{this.props.hotels[0].NearestAirport} {this.props.hotels[0].NearestAirportDistance} mi</span>
      </div>
    );
  }
}

export default HotelInfo;