import React, { Component } from 'react';
import { library } from "@fortawesome/fontawesome-svg-core";
import { far } from "@fortawesome/free-regular-svg-icons";
import { faClock, faImage, faPencilAlt, faPaw, faHourglassHalf, faStopwatch, faBars } from "@fortawesome/free-solid-svg-icons";
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Homepage from "./components/Pages/homepage";
import Documentation from "./components/Pages/documentation";

import "./assets/css/style.min.css";

library.add(far, faClock, faImage, faPencilAlt, faPaw, faHourglassHalf, faStopwatch, faBars);

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Route exact path="/" component={Homepage} />
        <Route exact path="/documentation" component={Documentation} />
      </div>
      </Router>
    );
  }
}

export default App;
