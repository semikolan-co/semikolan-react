import harsh from '../images/harsh.jpg';
import { Link } from "react-router-dom";
function About(props) {
  return (
        <div id="about" className="about container">
  <div className="titleline" data-aos="fade-right" data-aos-duration={500}>
    <span><em>{props.num}</em>&nbsp;About Us</span>
    <div className="line-horizontal" />
  </div>
  <div className="aboutdiv">
    <div data-aos="fade-right" data-aos-duration={500}>
      <p>{props.content ? props.content : `Hello, We are a team of Web developers, App developers, Graphic designers, UI/UX Designers and Video Editors passionate about building technical things. `}</p>
      <Link to="/about" className="button" data-aos="fade-up" data-aos-duration={500}>Know More</Link>
    </div>
    <div data-aos="fade-left" data-aos-duration={500}>
      <div className="img filterdiv" />
      <img src={harsh} alt="Profile Image" className="img profileimg" />
      <div className="img profileimgdiv" />
    </div>
  </div>
</div>
  );
}

export default About;
