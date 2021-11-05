import React from "react";

function Community(props) {
  return (
    <div id="achievements" className="container">
      <div className="titleline" data-aos="fade-right" data-aos-duration={500}>
        <span>
          <em>{props.num}</em>&nbsp;Community Partners
        </span>
        <div className="line-horizontal" />
      </div>
      <div className="achievementdiv">
        {props.Community.map((achievement, i) => {
          return (
            <div className data-aos="fade-up" data-aos-duration={500}>
              {/** <i className={`fa fa-${achievement.icon}`} />*/}
              <span>{achievement.title}</span>
              {/**   <span>
                 {achievement.description}
               </span>*/}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Community;
