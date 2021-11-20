import React from "react";
import Header from "../component/Header";
import Landing from "../component/Landing";
import Footer from "../component/Footer";
import BongoCat from "../component/BongoCat";
import { Helmet } from "react-helmet";
import semikolan from "../json/semikolan.json";
import Projects from "../component/Projects";
export default function Initiatives() {
  return (
    <>
      <Header />
      <Landing
        lottiename="achievements"
        redirect="#billi"
        p1=""
        p2="Our Initiatives"
        p3="Things we're building for the world!"
        buttontext="Have a Look"
      />
      <Projects />
      <BongoCat />

      <Footer social={semikolan.social} />
      <Helmet>
        <title>Initiatives | SemiKolan | Never Stop Building</title>
      </Helmet>
    </>
  );
}
