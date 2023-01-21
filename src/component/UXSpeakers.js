import garima from "../assets/images/garima.jpg";
import lock from "../assets/images/lock.jpg";
import akshay from "../assets/images/akshay.png";
import mansi from "../assets/images/mansi.png";
import sanjeev from "../assets/images/sanjeev.png";

function UXSpeakers(props) {
  return (
    <div id="achievement" className="container" style={{ paddingTop: "150px" }}>
      <div className="titleline" data-aos="fade-right" data-aos-duration={500}>
        <span>
          <em>{props.num}</em>&nbsp;Speakers
        </span>
        <div className="line-horizontal" />
      </div>
      <div className="achievementdiv">
        <div className="speaker-card" data-aos="fade-up" data-aos-duration={500}>
          {/* <i className={`fa fa-${speakers.icon}`} /> */}
          <img src={garima} style={{ borderRadius: "10px" }} />
          <span style={{ textAlign: "center", marginTop: "10px" }}>Garima Mehta</span>
          <span style={{ textAlign: "center", fontWeight: "bold" }}>Sr. Product Designer at PayU</span>
          <span style={{ textAlign: "center", marginTop: "10px" }}>ADPList Mentor | Ex- Infosys, EY, Microsoft</span>
          <a
            className="speaker-linkedin"
            href="https://www.linkedin.com/in/qalamkaari-garima"
          >
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="fa fa-linkedin"
            />
          </a>
        </div>
        <div className="speaker-card" data-aos="fade-up" data-aos-duration={500} style={{ justifyContent: "center" }}>
          <img src={sanjeev} style={{ borderRadius: "10px" }} />
          <span style={{ textAlign: "center", marginTop: "10px" }}>Sanjeev Kumar</span>
          <span style={{ textAlign: "center", fontWeight: "bold" }}>Sr. Director - UX Design at apna</span>
          <span style={{ textAlign: "center", marginTop: "10px" }}>Ex - MakeMyTrip, Saal.ai, Swoo, InMobi</span>
          <a
            className="speaker-linkedin"
            href="https://www.linkedin.com/in/sandfolio"
          >
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="fa fa-linkedin"
            />
          </a>
        </div>
        <div className="speaker-card" data-aos="fade-up" data-aos-duration={500} style={{ justifyContent: "center" }}>
          <img src={akshay} style={{ borderRadius: "10px" }} />
          <span style={{ textAlign: "center", marginTop: "10px" }}>Akshay Jaiswal</span>
          <span style={{ textAlign: "center", fontWeight: "bold" }}>Senior User Experience Designer - IoT at Cisco</span>
          <span style={{ textAlign: "center", marginTop: "10px" }}>Ex - Infosys, Hexaware Technologies, Crompton Greaves, Induce Design</span>
          <a
            className="speaker-linkedin"
            href="https://www.linkedin.com/in/akshay-jaiswal-ab515b117/"
          >
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="fa fa-linkedin"
            />
          </a>
        </div>
        <div className="speaker-card" data-aos="fade-up" data-aos-duration={500} style={{ justifyContent: "center" }}>
          <img src={mansi} style={{ borderRadius: "10px" }} />
          <span style={{ textAlign: "center", marginTop: "10px" }}>Mansi Dave</span>
          <span style={{ textAlign: "center", fontWeight: "bold" }}>User Experience Designer at Mindtree</span>
          <span style={{ textAlign: "center", marginTop: "10px" }}>Ex - Solvative, Infostretch</span>
          <a
            className="speaker-linkedin"
            href="https://www.linkedin.com/in/mansi-dave-54992a97/"
          >
            <i
              data-aos-anchor-placement="top-bottom"
              data-aos="fade-up"
              data-aos-duration={500}
              className="fa fa-linkedin"
            />
          </a>
        </div>
        );
      </div>
    </div>
  );
}

export default UXSpeakers;
