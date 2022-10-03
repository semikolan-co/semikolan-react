import harsh from "../assets/images/about.png";
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
                Semikolan is an open source focused community where we share our
                learnings, promote hackathons, conduct workshops beneficial to
                others and an inclusive space where anyone can share and ask
                anything they like related to tech and fun.
              </p>
              <p>
                Semikolan is also a platform for like minded learners,
                developers and Enthusiasts to learn, connect, create great
                connections and work on great projects among themselves and for
                the community.
              </p>
              <p>
                Anyone can join and become a part of the community and join our
                mission to build for the betterment.
              </p>
            </>
          )}
          <p style={{ marginTop: "20px", marginBottom: "20px" }}>
            <Link
              to="/about"
              className="button"
              data-aos="fade-up"
              data-aos-duration={500}
            >
              Know More
            </Link>
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration={500}
          style={{ width: "100%" }}
        >
          <div className="img filterdiv" />
          <img src={harsh} alt="Profile" className="img profileimg" />
          <div className="img profileimgdiv" />
        </div>
      </div>
    </div>
  );
}

export default About;
