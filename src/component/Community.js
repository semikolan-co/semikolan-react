import React from "react";

const COMMUNITY = [
  {
    "title": "Learn For Cause",
    "icon": "logo_learnforcause.png",
    "url": "https://www.learnforcause.com/"
  },
  {
    "title": "Script Foundation",
    "icon": "logo_scriptfoundation.png",
    "url": "https://www.scriptindia.org/"
  },
  {
    "title": "CNCF Bhopal",
    "icon": "logo_cncfbhopal.png",
    "url": "https://community.cncf.io/bhopal"
  },
  {
    "title": "ECell IET DAVV",
    "icon": "logo_ecellietdavv.png",
    "url": "https://ietdavv.edu.in/"
  },
  {
    "title": "Eduhub",
    "icon": "logo_eduhub.png",
    "url": "https://eduhubcommunity.tech/"
  },
  {
    "title": "Devscript",
    "icon": "logo_devscript.png",
    "url": "https://devscript.org/"
  },
  {
    "title": "People who Codes",
    "icon": "logo_peoplewhocodes.png",
    "url": "https://peoplewho.codes/"
  },
  {
    "title": "Flutter Bhopal",
    "icon": "logo_flutterbhopal.png",
    "url": "https://gdsc.community.dev/university-institute-of-technology-rgpv-bhopal/"
  },
  {
    "title": "GDSC UIT RGPV",
    "icon": "logo_gdscuitrgpv.png",
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
                <img src={require('../assets/images/community/'+community.icon).default} alt={community.title} />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default Community;
