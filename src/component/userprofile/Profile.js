
import Landing from "../../component/Landing";
import About from "../../component/About";
import Skills from "../../component/Skills";
import Achievements from "../../component/Achievements";
import Technologies from "../../component/Technologies";
import React from "react";
import harsh from "./harsh"


export default function App(props) {
   const user = {
      harsh:harsh
   }[props.user]
  return (
    <>
      <Landing
        lottiename={user.landing.lottiename}
        p1={user.landing.p1}
        p2={user.landing.p2}
        p3={user.landing.p3}
        buttontext={user.landing.buttontext}
      />
      <About
        num="01."
        content={user.about.content}
        img={user.about.img}
      />
      <Skills num="01.1" elements={user.skills}/>
      <Achievements num="03." achievements={user.achievements} removeViewMore />
    </>
  );
}
