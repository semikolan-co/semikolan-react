import { Link } from "react-router-dom";

import React from "react";
import AOS from 'aos';
import logo from "../assets/images/logo.png";

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
    AOS.init();
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
            <img src={logo} alt="SemiKolan Logo" style={{ height: "40px" }} />
            <span style={{ position: "relative", left: 5, top: 3 }}>
              &nbsp;SemiKolan
            </span>
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
              <Link to="/initiatives">
                <em>02.</em>&nbsp;Initiatives
              </Link>
            </li>
            <li>
              <Link to="/join">
                <em>03.</em>&nbsp;Join
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <em>04.</em>&nbsp;Contact
              </Link>
            </li>
            <li>
              <Link to="/hacktoberfest">
                <em>New! </em>&nbsp;Hacktoberfest
              </Link>
            </li>
            {/* <li>
              <Link to="/StartupSupport">
                <em>06.</em>&nbsp;Startup Support
              </Link>
            </li> */}
            <li>
              <a target="blank" href="https://blog.semikolan.co">
                Blog
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
