import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      menuClass: "linkContainer"
    };
    this.toggleClass = this.toggleClass.bind(this);
  }
  toggleClass(key, value) {
    this.setState({ [key]: value });
  }
  render() {
    return (
      <div className="outerContainer">
        <nav>
          <h1 className="homeLogo">Start Bootstrap</h1>
          <button
            className="menu"
            onClick={() =>
              this.state.menuClass === "linkContainer"
                ? this.toggleClass("menuClass", "dropDown")
                : this.toggleClass("menuClass", "linkContainer")
            }
          >
            MENU &#x2630;{" "}
          </button>
          <div className={this.state.menuClass}>
            <span id="services" className="links">
              SERVICES
            </span>
            <span id="portfolio" className="links">
              PORTFOLIO
            </span>
            <span id="about" className="links">
              ABOUT
            </span>
            <span id="team" className="links">
              TEAM
            </span>
            <span id="contact" className="links">
              CONTACT
            </span>
          </div>
        </nav>
        <div className="mainBody">
          <div>
            <div id="subHead" className="greeting">
              Welcome To Our Studio!
            </div>
            <div id="mainGreeter" className="greeting">
              IT'S NICE TO MEET YOU
            </div>
            <button className="moreButton">TELL ME MORE</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
