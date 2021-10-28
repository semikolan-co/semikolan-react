import harsh from '../assets/images/harsh.jpg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function About(props) {
  return (
        <div id="achievement" className="container">
          
  <div className="titleline" data-aos="fade-right" data-aos-duration={500}>
    <span><em>{props.num}</em>&nbsp;Where we can Help you</span>
    <div className="line-horizontal" />
  </div>
  <div className="achievementdiv">
    {props.achievements.map((achievement, i) => { 
           return (
             <div className data-aos="fade-up" data-aos-duration={500}>
               <i className={`fa fa-${achievement.icon}`} />
               <span>{achievement.title}</span>
               <span>
                 {achievement.description}
               </span>
             </div>
           ); 
        })}
  </div>
</div>

  );
}

export default About;
