import React, { Component } from 'react';

import Header from "../Header/header";
import Promo from "../Promo/promo";
import Feature from "../Feature/feature"

import "../../assets/css/style.min.css";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header/>
          <Promo/>
          <Feature/>
        </div>
    );
  }
}

export default App;
