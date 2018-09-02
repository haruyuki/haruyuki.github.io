import React, { Component } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Item extends Component {
  render() {
    return (
      <li className={this.props.classes}><a className="nav-link scrollto" href={this.props.link}>{this.props.content}</a></li>
    );
  }
}


class Header extends Component {
  ListItem(classes, link, content) {
    return <Item classes={classes} link={link} content={content}/>
  }

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
              <FontAwesomeIcon icon="bars" inverse={true}/>
            </button>

            <nav className="navbar-collapse collapse" id="navbar-collapse">
              <ul className="nav navbar-nav">
                {this.ListItem("nav-item sr-only", "", "Home")}
                {this.ListItem("nav-item", "", "About")}
                {this.ListItem("nav-item", "", "Getting Started")}
                {this.ListItem("nav-item", "", "License")}
                {this.ListItem("nav-item last", "", "Contact")}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
