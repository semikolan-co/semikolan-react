import harsh from '../images/harsh.jpg';
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
              SemiKolan is Nothing but just a group of some friends, who love to
              build things and help others.
            </p>
            <p>
              Actually we are the team of Self Learner, Innovative Minds, Future Entreprenuer, Tech Enthusiasts who are  passionate about
              building <Link to="/initiatives"> Technical Stuffs</Link>.
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
