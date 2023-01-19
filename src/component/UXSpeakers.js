import garima from "../assets/images/garima.jpg";

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
        {props.speakers.map((speakers, i) => {
          return (
            <div className data-aos="fade-up" data-aos-duration={500}>
              {/* <i className={`fa fa-${speakers.icon}`} /> */}
              <img src={garima} style={{ borderRadius: "10px" }} />
              <span>{speakers.title}</span>
              <span>{speakers.description}</span>
              <span>{speakers.experience}</span>
              <a
              className="speaker-linkedin"
                href={speakers.linkedin}
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
        })}
      </div>
    </div>
  );
}

export default UXSpeakers;
