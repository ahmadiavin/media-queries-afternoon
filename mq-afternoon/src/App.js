import React, { Component } from "react";
import "./reset.css";
import "./App.css";
// import {MdDehaze} from 'react-icons/md'
class App extends Component {
  constructor() {
    super();
    this.state = {
      menuStatus: "hidden"
    };
  }
  
  toggleMenu = () => {
    if(this.state.menuStatus === 'hidden-open') {
      this.setState({menuStatus: 'hidden-close'});
    } else {
      this.setState({menuStatus: 'hidden-open'});
    }
  }
  render() {
    return (
      <body>
        <nav className="mainNav">
          <div className="container">
            <a className="bootstrap" href="#page-top">
              Start Bootstrap
            </a>

            <button className='toggler' onClick={this.toggleMenu}>
              Menu <i />
            </button>

            <div className="hidden">
              <ul>
                <li>
                  <a className='nav-link' href="#Services">Services</a>
                </li>
                <li>
                  <a className='nav-link' href="#Portfolio">Portfolio</a>
                </li>
                <li>
                  <a className='nav-link' href="#About">About</a>
                </li>
                <li>
                  <a  className='nav-link' href="#Team">Team</a>
                </li>
                <li>
                  <a  className='nav-link' href="#Contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className={this.state.menuStatus}></div>
        <header>
          <div className="headerContainer">
            <div className="intro-text">
              <div className="welcome">Welcome To Our Studio!</div>
              <div className="nice">It's Nice To Meet You</div>
              <a className="tellme" href="#services">
                
                Tell Me More
              </a>
            </div>
          </div>
        </header>
      </body>
    );
  }
}

export default App;
