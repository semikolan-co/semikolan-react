import harsh from '../images/harsh.jpg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer01">
      
      <div className="socialicons">
        <div className="iconsdiv">
          <a href="https://instagram.com/instakolan">
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="fa fa-instagram"
            />
          </a>
          <a href="https://linkedin.com/company/semikolan">
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="fa fa-linkedin"
            />
          </a>
          <a href="https://github.com/semikolan-dev">
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="fa fa-github"
            />
          </a>
          <a href="mailto:contact@semikolan.co">
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="far fa-envelope"
            />
          </a>
          
          <a href="https://facebook.com/semikolan">
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="fa fa-facebook"
            />
          </a>

          <a href="https://twitter.com/semikolandev">
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="fa fa-twitter"
            />
          </a>
          <a href="https:// /meinhoonharsh">
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="fa fa-whatsapp"
            />
          </a>
        </div>
        <div className="line"></div>
      </div>
      <span>
        Designed with <Link to="#">♥</Link> by <a href="https://github.com/semikolan-dev">Team Semikolan</a>
      </span>
    </footer>
  );
}

