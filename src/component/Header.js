import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import React, { useEffect, useState } from "react";
import logo from '../images/logo.png'

import { render } from "@testing-library/react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { small: 0 };
    this._toggleDiv = this._show;
    
  }

  _show() {
    document.querySelector(".nav01>ul").style.display = "block";
    this._toggleDiv = this._hide;
  }
  _hide() {
    document.querySelector(".nav01>ul").style.display = "none";
    this._toggleDiv = this._show;
  }
  componentDidMount() {
    window.addEventListener("scroll", () => {
      this.setState({ small: window.pageYOffset > 50 });
      // alert(this.state.small)
    });
  }

  render() {
    return (
      <header className={this.state.small ? "header_bar header01" : "header01"}>
        <span
          data-aos="fade-right"
          data-aos-duration={500}
          onclick="location.replace('/')"
        >
          <Link to="/">
            <img src={logo} style={{ height: "40px" }} />
            <span style={{position:"relative",left:5,top:3}}>&nbsp;SemiKolan</span>
          </Link>
        </span>
        <i
          onClick={() => {
            this._toggleDiv();
          }}
          className="fa fa-bars"
        />
        <nav className="nav01" data-aos="fade-down" data-aos-duration={500}>
          <ul>
            <li>
              <Link to="/about">
                <em>01.</em>&nbsp;About
              </Link>
            </li>
            <li>
              <Link to="/showcase">
                <em>02.</em>&nbsp;Showcase
              </Link>
            </li>
            <li>
              <Link to="/initiatives">
                <em>03.</em>&nbsp;Initiatives
              </Link>
            </li>
            <li>
              <Link to="/join">
                <em>04.</em>&nbsp;Join
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <em>05.</em>&nbsp;Contact
              </Link>
            </li>
            <li>
              <a href="" onClick={()=> {alert("Explore Section is Under Construction");return false} }>Explore</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
