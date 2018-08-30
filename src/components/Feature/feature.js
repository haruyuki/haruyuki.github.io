import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Item extends Component {
  render() {
    return (
      <div className="item col-lg-4 col-md-6 col-12">
        <div className="icon-holder">
          <FontAwesomeIcon icon={[this.props.type, this.props.icon]} />
        </div>
        <div className="content">
          <h3 className="sub-title">{this.props.title}</h3>
          <p>{this.props.desc}</p>
        </div>
      </div>
    );
  }
}

class Feature extends Component {
  featureItem(type, icon, title, desc) {
    return <Item type={type} icon={icon} title={title} desc={desc} />
  }

  render() {
    return (
      <section id="about" className="about section">
        <div className="container">
          <h2 className="title text-center">What is CS Pound?</h2>
          <p className="intro">CS Pound, the one and only Discord bot (so far...) that provides your server with useful commands for the online web game Chicken Smoothie!</p>
          <div className="row">
            {this.featureItem("far", "clock", "Time", "Tells you how long before the pound opens or if the pound is already open.")}
            {this.featureItem("far", "image", "Image", "Displays an image of the pet and its rarity from the given link.")}
          </div>
        </div>
      </section>
    );
  }
}

export default Feature;
