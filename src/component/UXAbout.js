import harsh from "../assets/images/about.png";
import { Link } from "react-router-dom";
function About(props) {
  return (
    <div id="about" className="about container custom">
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
          <div className="about-button">
          <p style={{ marginTop: "40px", marginBottom: "20px", marginRight: "20px" }}>
            
              <a className="know-more-button"
              data-aos="fade-up"
              href="https://docs.google.com/document/d/1B9EZa_hCoCEQ6_DsP1H8NPi22z2TBi9a1wGrPZ1cg5Y/edit?usp=sharing"
              data-aos-duration={500}
              >
                Code of Conduct
              </a>
          </p>
          <p style={{ marginTop: "40px", marginBottom: "20px" }}>
            
              <a className="know-more-button"
              data-aos="fade-up"
              href="https://drive.google.com/file/d/1rvXHpZl95P54jIskc46MSw8ti6zVKz3H/view?usp=sharing"
              data-aos-duration={500}
              >
                Event Brochure
              </a>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
