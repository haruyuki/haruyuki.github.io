import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class Header extends Component {
  render() {
    return (
      <header id="header" className="header">
        <div className="container">
          <h1 className="logo float-left">
            <Link className="scrollto" to="/#promo"><span className="logo-title">CS Pound</span></Link>
          </h1>

          <div id="main-nav" className="main-nav navbar-expand-md float-right" role="navigation">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>

            <nav className="navbar-collapse collapse" id="navbar-collapse">
              <ul className="nav navbar-nav">
                <li className="nav-item sr-only"><a className="nav-link scrollto" href="">Home</a></li>
                <li className="nav-item"><a className="nav-link scrollto" href="">About</a></li>
                <li className="nav-item"><a className="nav-link scrollto" href="">License</a></li>
                <li className="nav-item last"><a className="nav-link scrollto" href="">Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
