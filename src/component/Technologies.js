import ajax from '../images/technologies/ajax.png';
import bootstrap from '../images/technologies/bootstrap.png';
import jquery from '../images/technologies/jquery.png';
import python from '../images/technologies/python.png';
import sass from '../images/technologies/sass.png';
import json from '../images/technologies/json.png';
import flask from '../images/technologies/flask.png';
import git from '../images/technologies/git.png';
import github from '../images/technologies/github.png';
import heroku from "../images/technologies/heroku.png";
import photoshop from "../images/technologies/photoshop.png";
import fontawesome from "../images/technologies/fontawesome.png";
import React from 'react'

export default class extends React.Component {
  
  render(){
   const technologies = [ajax,bootstrap,jquery,python,sass,json,flask,git,github,heroku,photoshop,fontawesome]
   return (
       <div id="tech" className="about container">
  <div className="titleline" data-aos="fade-right" data-aos-duration={500}>
    <span><em>03.</em>&nbsp;Technologies &amp; Tools</span>
    <div className="line-horizontal" />
  </div>
  <div className="aboutdiv">
    <div className="row">
      {technologies.map((technology, i) => {    
           return (<div className="col-lg-2 col-md-3 col-4 text-center">
        <img src={technology} alt className="techicon" />
      </div>) 
        })}
      </div>
  </div>
</div>


  );
   }
}

