import harsh from '../images/harsh.jpg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer className="footer01">
      
      <div className="socialicons">
        <div className="iconsdiv">
          <a href="https://instagram.com/meinhoonharsh">
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="fa fa-instagram"
            />
          </a>
          <a href="https://lindedin.com/in/meinhoonharsh">
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="fa fa-linkedin"
            />
          </a>
          <a href="https://github.com/meinhoonharsh">
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="fa fa-github"
            />
          </a>
          <a href="mailto:harshprogrammer782@gmail.com">
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="far fa-envelope"
            />
          </a>
          <a href="https://hackerrank.com/harshprogrammer">
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="fab fa-hackerrank"
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
        Designed with <Link to="#">♥</Link> by <a href="https://semikolan.co/harsh">Harsh Vishwakarma</a>
      </span>
    </footer>
  );
}

