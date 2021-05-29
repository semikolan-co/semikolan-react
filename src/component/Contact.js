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
            Currently I am looking for any new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </span>
          <Link to="/contact">Contact Me</Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
