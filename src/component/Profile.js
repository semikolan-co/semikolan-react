import Landing from "./Landing";
import About from "./About";
import Skills from "./Skills";
import Achievements from "./Achievements";
import React from "react";
import DeveloperJSON from "../json/profiles/harsh.json";
import { useParams } from "react-router-dom";
import Error404 from "./Error404";

export default function App() {
  let reqName = "";
  const { name } = useParams();
  let found = false;
  DeveloperJSON.Developers.forEach((Dname) => {
    if (Dname.landing.name === name) {
      reqName = Dname;
      found = true;
    }
  });
  let user = reqName;

  return (
    <>
      {found && (
        <Landing
          lottiename={user.landing.lottiename}
          p1={user.landing.p1}
          p2={user.landing.p2}
          p3={user.landing.p3}
          buttontext={user.landing.buttontext}
        />
      )}
      {found && (
        <About num="01." content={user.about.content} img={user.about.img} />
      )}

      {found && <Skills num="01.1" elements={user.skills} />}
      {found && (
        <Achievements
          num="03."
          achievements={user.achievements}
          removeViewMore
        />
      )}

      {!found && <Error404 />}
    </>
  );
}
