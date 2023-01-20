import garima from "../assets/images/garima.jpg";
import lock from "../assets/images/lock.jpg";

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
          <span style={{ textAlign: "center" , marginTop:"10px"}}>Garima Mehta</span>
          <span style={{ textAlign: "center", fontWeight: "bold" }}>Sr. Product Designer at PayU</span>
          <span style={{ textAlign: "center", marginTop:"10px" }}>ADPList Mentor | Ex- Infosys, EY, Microsoft</span>
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
          {/* <i className={`fa fa-${speakers.icon}`} /> */}
          <img src={lock} style={{ borderRadius: "10px" }} />
          <span style={{ textAlign: "center" }}>To be announced shortly!</span>
        </div>
        <div className="speaker-card" data-aos="fade-up" data-aos-duration={500} style={{ justifyContent: "center" }}>
          {/* <i className={`fa fa-${speakers.icon}`} /> */}
          <img src={lock} style={{ borderRadius: "10px" }} />
          <span style={{ textAlign: "center" }}>To be announced shortly!</span>
        </div>
        <div className="speaker-card" data-aos="fade-up" data-aos-duration={500} style={{ justifyContent: "center" }}>
          {/* <i className={`fa fa-${speakers.icon}`} /> */}
          <img src={lock} style={{ borderRadius: "10px" }} />
          <span style={{ textAlign: "center" }}>To be announced shortly!</span>
        </div>
        );
      </div>
    </div>
  );
}

export default UXSpeakers;
