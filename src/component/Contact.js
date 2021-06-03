import Lottie from "react-lottie";
import git from "../lottie/git";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Contact(props) {
  const gitlottie = {
    loop: true,
    autoplay: true,
    animationData: git,
  };
  const style = {
    width:"100%",
  };
  return (
    <div id="work" className="container">
      <div className="titleline" data-aos="fade-right" data-aos-duration={500}>
        <span>
          <em>{props.num}</em>&nbsp;What's Next
        </span>
        <div className="line-horizontal" />
      </div>
      <div className="gitdiv row">
        <div
          className="col-lg-6 col-md-6 col-sm-12"
          data-aos="fade-right"
          data-aos-duration={500}
        >
          <div className="contactlottie">
            <Lottie options={gitlottie} style={style} />
          </div>
        </div>
        <div
          className="col-lg-6 col-md-6 col-sm-12"
          data-aos="fade-left"
          data-aos-duration={500}
        >
          <span>Get in Touch</span>
          <span>
            Currently we are looking for the place where the Magic Happens. And waiting for someone to send their Boat for us to reach that place.
            <br />If you didn't get it have a Look at <a href="hijij">TVF Pitchers</a><br />
            In short, We are always ready for new Opportunities
          </span>
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
