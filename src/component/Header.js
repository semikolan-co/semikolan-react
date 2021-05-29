import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import React, { useEffect, useState } from "react";

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
          <Link to="/">&lt;/hV&gt;</Link>
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
              <Link to="/work">
                <em>02.</em>&nbsp;Work
              </Link>
            </li>
            <li>
              <Link to="/achievements">
                <em>03.</em>&nbsp;Achievements
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <em>04.</em>&nbsp;Contact
              </Link>
            </li>
            <li>
              <a href="/explore">Explore</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
