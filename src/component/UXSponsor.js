import React from "react";
import SPONSORS from '../json/uxsponsors.json';

function Sponsors(props) {
  return (
    <div id="community" className="container">
      <div className="titleline" data-aos="fade-right" data-aos-duration={500}>
        <span>
          <em>{props.num}</em>&nbsp;Sponsors
        </span>
        <div className="line-horizontal" />
      </div>
      <div className="communitydiv">
        {SPONSORS.map((sponsors, i) => {
          return (
            <a href={sponsors.url} target="_blank" className="communityUrl">
              <div className="communityICON" data-aos="fade-up" data-aos-duration={500}>
                <img src={require('../assets/images/community/'+sponsors.icon).default} alt={sponsors.title} />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Sponsors;
