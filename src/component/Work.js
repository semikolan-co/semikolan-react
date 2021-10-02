import p01 from '../images/p01.jpg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import p02 from "../images/p02.jpg";
function Work(props) {
  return (
        <div id="work" className="about container">
  <div className="titleline" data-aos="fade-right" data-aos-duration={500}>
    <span><em>{props.num}</em>&nbsp;Things We've Built</span>
    <div className="line-horizontal" />
  </div>
  <div className="workdiv">
    <div className="projectdiv projectheight">
      <div data-aos="fade-left" data-aos-duration={500}>
        <img className="projectheight" src={p01} alt="Urbn Farm" />
        <div className="projectheight" />
      </div>
      <div className="projectheight" data-aos="fade-right" data-aos-duration={500}>
        <span>Healthcare</span>
        <span>Care 4 Covid</span>
        <span>Care4Covid is a Realtime Statistical Website for Analysis of Covid-19 (Sars-Cov-2). It is an attempt to help people stay updated with the Covid-19 Analytics.</span>
        <span>Flask&nbsp;JS&nbsp;HTML</span>
        <span><a target="_blank" href="https://github.com/semikolan-co/care4covid"><i className="fa fa-github" /></a>&nbsp;&nbsp;<a target="_blank" href="https://care4covid.co"><i className="fa fa-external-link-alt" /></a></span>
      </div>
    </div>
    <div className="projectdiv projectheight">
      <div data-aos="fade-right" data-aos-duration={500}>
        <img className="projectheight" src={p02} alt="Urbn Farm" />
        <div className="projectheight" />
      </div>
      <div className="projectheight" data-aos="fade-left" data-aos-duration={500}>
        <span>Shopping Website</span>
        <span>Urbnfarm</span>
        <span>It is an e-commerce Website where you can order fresh vegetables  Bhopal.</span>
        <span>PHP&nbsp;JS&nbsp;HTML</span>
        <span><a target="_blank" href="https://urbnfarm.in"><i className="fa fa-external-link-alt" /></a></span>
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
