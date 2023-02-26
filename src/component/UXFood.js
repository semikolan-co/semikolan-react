import React from "react";
import FOOD from '../json/uxfood.json';

function UXFood(props) {
  return (
    <div id="community" className="container">
      <div className="titleline" data-aos="fade-right" data-aos-duration={500}>
        <span>
          <em>{props.num}</em>&nbsp;Food Partner
        </span>
        <div className="line-horizontal" />
      </div>
      <div className="communitydiv">
        {FOOD.map((burger, i) => {
          return (
            <a href={burger.url} target="_blank" className="communityUrl">
              <div className="communityICON" data-aos="fade-up" data-aos-duration={500}>
                <img src={require('../assets/images/community/'+burger.icon).default} alt={burger.title} />
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default UXFood;
