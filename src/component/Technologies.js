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
import Flutter from "../images/technologies/flutter.png";
import Kotlin from "../images/technologies/kotlin.png";
import Java from "../images/technologies/java.png";
import Django from "../images/technologies/dj.png";
import Reactlogo from "../images/technologies/react.png";
import ReactNative from "../images/technologies/reactive_native.png";
import Figma from "../images/technologies/figma.png";
import Adobexd from "../images/technologies/adobe_xd.png";
import Replit from "../images/technologies/replit.png";
import Azure from "../images/technologies/azure.png";
import Illustrator from "../images/technologies/illustrator.png";
import Netlify from "../images/technologies/netify.png";
import Firebase from "../images/technologies/firebase.png";
import Mongodb from "../images/technologies/mongo_db.png";
import Csharp from "../images/technologies/csharp.png";
import C from "../images/technologies/c.png";
import Cpp from "../images/technologies/c++.png";
import Blender from "../images/technologies/blender-.png";


import React from 'react'

export default class extends React.Component {
  technologies = {
    ajax:ajax,
    bootstrap:bootstrap,
    jquery:jquery,
    python:python,
    sass:sass,
    json:json,
    flask:flask,
    git:git,
    github:github,
    heroku:heroku,
    photoshop:photoshop,
    fontawesome:fontawesome,
    flutter:Flutter,
    kotlin:Kotlin,
    java:Java,
    django:Django,
    react:Reactlogo,
    reactnative:ReactNative,
    figma:Figma,
    adobexd:Adobexd,
    replit:Replit,
    azure:Azure,
    illustrator:Illustrator,
    netlify:Netlify,
    firebase:Firebase,
    mongodb:Mongodb,
    c:C,
    csharp:Csharp,
    cpp:Cpp,
    blender:Blender,
  }
  
  render(){
   return (
       <div id="tech" className="about container">
  <div className="titleline" data-aos="fade-right" data-aos-duration={500}>
    <span><em>03.</em>&nbsp;Technologies &amp; Tools</span>
    <div className="line-horizontal" />
  </div>
  <div className="aboutdiv">
    <div className="row w-100">
      {this.props.technologies.map((technology, i) => {    
           return (<div className="col-xl-2 col-lg-2 col-md-3 col-4 text-center">
        <img src={this.technologies[technology]} alt className="techicon" />
      </div>) 
        })}
      </div>
  </div>
</div>


  );
   }
}

