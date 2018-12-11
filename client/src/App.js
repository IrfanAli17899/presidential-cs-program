/*eslint-disable*/

import React, { Component } from 'react';
import './App.css';
import Routers from './Routes';
import Navbar from './components/Navbar/Navbar';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
// import { faAnchor } from '@fortawesome/free-solid-svg-icons'

// library.add(faAnchor);
// library.add(faStroopwafel);
// library.add(faStroopwafel);
// library.add(faStroopwafel);



class App extends Component {
  state = {
    onRoute : "/",
  }

  changeRoute = (route) => {
    this.setState({onRoute: route});
  }
  render() {
    return (
      <div>
        <Routers />
        
      </div>
    );
  }
}

export default App;
