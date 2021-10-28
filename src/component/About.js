import harsh from '../assets/images/about.png';
import { Link } from "react-router-dom";
function About(props) {
  return (
    <div id="about" className="about container">
      <div className="titleline" data-aos="fade-right" data-aos-duration={500}>
        <span>
          <em>{props.num}</em>&nbsp;{props.titleline}
        </span>
        <div className="line-horizontal" />
      </div>
      <div className="aboutdiv">
        <div data-aos="fade-right" data-aos-duration={500}>
          {props.content ? (
            <p>{props.content}</p>
          ) : (
            <>
            <p>
              SemiKolan, as a starter, is a group of friends, who love to
              build things and help others. 
            </p>
            <p>
              Semikolan is also a platform for like minded learners, developers and Enthusiasts to learn, connect, create great connections 
              and work on great projects among themselves and for the community. The Semikolan team is a group of Self Learners, Innovative Minds
              and Tech Enthusiasts passionate about building <Link to="/initiatives">Technical Stuffs</Link>.
            </p>
            <p>
              We encourage anyone with an aptitute for learning to <a href="/join" >join</a> our community and join our mission to code for the better.
            </p>
            </>
          )}
          <Link
            to="/about"
            className="button"
            data-aos="fade-up"
            data-aos-duration={500}
          >
            Know More
          </Link>
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
