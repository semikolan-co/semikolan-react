import React from "react";
import COMMUNITY from '../json/uxcommunities.json'
// import { safe as jsonc } from 'jsonc';
// const COMMUNITY = jsonc.parse(COMMUNITYJSONC)

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
