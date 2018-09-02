import React, { Component } from "react";
const helpData = require("../../assets/json/help.json");

class Command extends Component {
  render() {
    const example = helpData.categories[this.props.category]["commands"][this.props.title]["examples"]["1"];
    console.log(example);
    return (
      <div className="block">
        <h3 className="sub-title text-center">{this.props.title}</h3>
        <p>{helpData.categories[this.props.category]["commands"][this.props.title]["description"]}</p>
        <ul className="list-unstyled">
          <li><strong>Syntax: </strong>{helpData.categories[this.props.category]["commands"][this.props.title]["usage"]}</li>
        </ul>
        {example !== undefined &&
          <div className="code-block">
            <pre className="code-pre">
              <code className="code">{example}</code>
            </pre>
          </div>
        }
      </div>
    );
  }
}

class gettingStarted extends Component {
  commandBlock(title, category) {
    return <Command title={title} category={category} />
  }
  render() {
    return (
      <section id="docs" className="docs section">
        <div className="container">
          <div className="docs-inner">
            <h2 className="title text-center">Getting Started</h2>
            {this.commandBlock("Image", "Chicken Smoothie")}
            {this.commandBlock("Oekaki", "Chicken Smoothie")}
            {this.commandBlock("Pet", "Chicken Smoothie")}
            {this.commandBlock("Time", "Chicken Smoothie")}
            {this.commandBlock("Auto Remind", "General")}
            {this.commandBlock("Remind Me", "General")}
            {this.commandBlock("Giveaway", "General")}
          </div>
        </div>
      </section>
    );
  }
}

export default gettingStarted;
