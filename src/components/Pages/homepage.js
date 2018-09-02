import React, { Component } from 'react';

import Header from "../Header/header";
import Promo from "../Promo/promo";
import Feature from "../Feature/feature";
import Starting from "../Starting/starting";

import "../../assets/css/style.min.css";

class App extends Component {
  render() {
    return (
        <div className="App">
          <Header/>
          <Promo/>
          <Feature/>
          <Starting/>
        </div>
    );
  }
}

export default App;
