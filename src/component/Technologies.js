import ajax from '../assets/images/technologies/ajax.png';
import bootstrap from '../assets/images/technologies/bootstrap.png';
import jquery from '../assets/images/technologies/jquery.png';
import python from '../assets/images/technologies/python.png';
import sass from '../assets/images/technologies/sass.png';
import json from '../assets/images/technologies/json.png';
import flask from '../assets/images/technologies/flask.png';
import git from '../assets/images/technologies/git.png';
import github from '../assets/images/technologies/github.png';
import heroku from "../assets/images/technologies/heroku.png";
import photoshop from "../assets/images/technologies/photoshop.png";
import fontawesome from "../assets/images/technologies/fontawesome.png";
import Flutter from "../assets/images/technologies/flutter.png";
import Kotlin from "../assets/images/technologies/kotlin.png";
import Java from "../assets/images/technologies/java.png";
import Django from "../assets/images/technologies/dj.png";
import Reactlogo from "../assets/images/technologies/react.png";
import ReactNative from "../assets/images/technologies/reactive_native.png";
import Figma from "../assets/images/technologies/figma.png";
import Adobexd from "../assets/images/technologies/adobe_xd.png";
import Replit from "../assets/images/technologies/replit.png";
import Azure from "../assets/images/technologies/azure.png";
import Illustrator from "../assets/images/technologies/illustrator.png";
import Netlify from "../assets/images/technologies/netify.png";
import Firebase from "../assets/images/technologies/firebase.png";
import Mongodb from "../assets/images/technologies/mongo_db.png";
import Csharp from "../assets/images/technologies/csharp.png";
import C from "../assets/images/technologies/c.png";
import Cpp from "../assets/images/technologies/c++.png";
import Blender from "../assets/images/technologies/blender-.png";


import React from 'react'

export default class Technology extends React.Component {
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
        <img src={this.technologies[technology]} alt="Technology Icon" className="techicon" />
      </div>) 
        })}
      </div>
  </div>
</div>


  );
   }
}

