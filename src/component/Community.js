import React from "react";
import hackodhisa from '../assets/images/community/hackodhisa.jpg';
import hackthisfall from '../assets/images/community/hackthisfall.png';
import swoc from '../assets/images/community/swoc.png';
import icc from '../assets/images/community/ICC.png';
import gdscUitRGP from '../assets/images/community/gdsc.svg';
import cncfBhopal from '../assets/images/community/cncf.svg';

const COMMUNITY = [
  {
    "title": "Hack Odisha",
    "icon": hackodhisa,
    "url": "https://hackodisha.xyz/"
  },
  {
    "title": "Hack this fall",
    "icon": hackthisfall,
    "url": "https://hackthisfall.tech/"
  },
  {
    "title": "Script winter of code",
    "icon": swoc,
    "url": "https://swoc.scriptindia.org/"
  },
  {
    "title": "Infinite clone conspiracy",
    "icon": icc,
    "url": "https://iccta.co/"
  },
  {
    "title": "CNCF Bhopal",
    "icon": cncfBhopal,
    "url": "https://community.cncf.io/bhopal/"
  },
  {
    "title": "GDSC UIT RGPV",
    "icon": gdscUitRGP,
    "url": "https://gdsc.community.dev/university-institute-of-technology-rgpv-bhopal/"
  }
];

function Community(props) {
  return (
    <div id="community" className="container">
      <div className="titleline" data-aos="fade-right" data-aos-duration={500}>
        <span>
          <em>{props.num}</em>&nbsp;Community Partners
        </span>
        <div className="line-horizontal" />
      </div>
      <div className="communitydiv">
        {COMMUNITY.map((community, i) => {
          return (
            <a href={community.url} target="_blank" className="communityUrl">
              <div className="communityICON" data-aos="fade-up" data-aos-duration={500}>
                <img src={community.icon} alt={community.title} />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Community;
