import p01 from '../images/p01.jpg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import p02 from "../images/p02.jpg";
function Work(props) {
  return (
        <div id="work" className="about container">
  <div className="titleline" data-aos="fade-right" data-aos-duration={500}>
    <span><em>{props.num}</em>&nbsp;Some Things I've Built</span>
    <div className="line-horizontal" />
  </div>
  <div className="workdiv">
    <div className="projectdiv projectheight">
      <div data-aos="fade-left" data-aos-duration={500}>
        <img className="projectheight" src={p01} alt="Urbn Farm" />
        <div className="projectheight" />
      </div>
      <div className="projectheight" data-aos="fade-right" data-aos-duration={500}>
        <span>Shopping Website</span>
        <span>Urbn Farm</span>
        <span>It is a Website used Lorem ipsum dolor sit amet consectetur adipi</span>
        <span>PHP&nbsp;JS&nbsp;HTML</span>
        <span><a href><i className="fa fa-github" /></a>&nbsp;&nbsp;<a href><i className="fa fa-external-link-alt" /></a></span>
      </div>
    </div>
    <div className="projectdiv projectheight">
      <div data-aos="fade-right" data-aos-duration={500}>
        <img className="projectheight" src={p02} alt="Urbn Farm" />
        <div className="projectheight" />
      </div>
      <div className="projectheight" data-aos="fade-left" data-aos-duration={500}>
        <span>Blog Website</span>
        <span>Circuit Reboot</span>
        <span>It is a Website used Lorem ipsum dolor sit amet consectetur adipi</span>
        <span>PHP&nbsp;JS&nbsp;HTML</span>
        <span><a href><i className="fa fa-github" /></a>&nbsp;&nbsp;<a href><i className="fa fa-external-link-alt" /></a></span>
      </div>
    </div>
  </div>
  
  {props.removeViewMore ? "" : 
  <center><Link to="/showcase" className="button" data-aos="fade-up" data-aos-duration={500}>View More</Link>
  </center>
}
</div>

  );
}

export default Work;
