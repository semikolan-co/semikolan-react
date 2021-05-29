import harsh from '../images/harsh.jpg';
import { Link } from "react-router-dom";
function About(props) {
  return (
        <div id="about" className="about container">
  <div className="titleline" data-aos="fade-right" data-aos-duration={500}>
    <span><em>{props.num}</em>&nbsp;About Me</span>
    <div className="line-horizontal" />
  </div>
  <div className="aboutdiv">
    <div data-aos="fade-right" data-aos-duration={500}>
      <p>Hello! I'm Harsh, a Pseudo Web Developer.</p>
      <p>I am a Full Stack Web Developer who used to Code in different languages like <a href>HTML</a> , CSS, JavaScript, PHP, MySQL and there different Frameworks like jQuery, Bootstrap.css, Animate.css etc. As Well as I sometimes use
        CMS Platform (WordPress) to create a Website. My Hobby is to write Code.I have very different kind of Skills from various Fields like Web Development, UI/UX Development, Video Editing, Graphic Designing, PCB Development, Electronics,
        IoT (Internet of Things) and lot more.I also Create YouTube Videos about Learning Electronics &amp; Web Development that gives me Pleasure.I always Willing to Learn Something New to Improve my Skills.</p>
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
