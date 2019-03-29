/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch('http://localhost:3000/location/attractions')
      .then((response) => {
        console.log(response);
      });
  }

  render() {
    return (
      <div>
        More Locations...
      </div>
    );
  }
}


// function App(props) {
//   return (
//     <div>
//       Locations...
//     </div>
//   )
// }

ReactDOM.render(<App />, document.getElementById('app'));
