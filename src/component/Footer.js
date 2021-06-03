import harsh from '../images/harsh.jpg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
export default function Footer(props) {
  return (
    <footer className="footer01">
      <div className="socialicons">
        <div className="iconsdiv">
          <a
            href={
              props.social.instagram
                ? props.social.instagram
                : "https://instagram.com/instakolan"
            }
          >
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="fa fa-instagram"
            />
          </a>
          <a
            href={
              props.social.linkedin
                ? props.social.linkedin
                : "https://linkedin.com/company/semikolan"
            }
          >
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="fa fa-linkedin"
            />
          </a>
          <a
            href={
              props.social.github
                ? props.social.github
                : "https://github.com/semikolan-dev"
            }
          >
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="fa fa-github"
            />
          </a>
          <a href={"mailto:"+  (props.social.mail ? props.social.mail : 'contact@semikolan.co')}>
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="far fa-envelope"
            />
          </a>

          <a href={props.social.youtube ? props.social.youtube : "https://youtube.com/semikolan"}>
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="fa fa-youtube"
            />
          </a>

          {/* <a href="https://twitter.com/semikolandev">
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="fa fa-twitter"
            />
          </a> */}
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
        Designed with <Link to="#">&hearts;</Link> by
        <a href="https://github.com/semikolan-dev">Semikolan</a>
      </span>
    </footer>
  );
}

