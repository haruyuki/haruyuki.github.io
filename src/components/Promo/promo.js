import React, { Component } from 'react';

class Promo extends Component {
  render() {
    return (
      <section id="promo" className="promo section offset-header">
        <div className="container text-center">
          <h2 className="title"><span className="highlight-left">CS</span> <span className="highlight-right">Pound</span></h2>
          <p className="intro">The missing link between Discord and Chicken Smoothie</p>
          <div className="btns">
            <a className="btn btn-cta-primary" href="https://discordapp.com/oauth2/authorize?client_id=407151634544590849&scope=bot&permissions=268946496">Invite!</a>
          </div>
          <ul className="meta list-inline">
            <li className="list-inline-item"><a href="https://github.com/Tesshin/CS-Pound">Code on GitHub</a></li>
            <li className="list-inline-item"><a href="https://www.patreon.com/cspound">Support me on Patreon!</a></li>
            <li className="list-inline-item"><a href="https://github.com/Tesshin/JS-Pound">JS Pound</a></li>
          </ul>
        </div>
        <div className="social-media"> </div>
      </section>
    );
  }
}

export default Promo;
