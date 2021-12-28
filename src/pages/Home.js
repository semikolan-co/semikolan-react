import React from "react";
import Header from "../component/Header";
import Landing from "../component/Landing";
import Footer from "../component/Footer";
import About from "../component/About";
import Contact from "../component/Contact";
import Work from "../component/Work";
import Skills from "../component/Skills";
import Achievements from "../component/Achievements";
import Community from "../component/Community";
import { Helmet } from "react-helmet";
import semikolan from "../json/semikolan.json";
export default function Home() {
  return (
    <>
      <Header />
      <Landing
        lottiename="home"
        redirect="contact"
        p1="Hii, We are the team of "
        p2="Harsh Vishwakarma"
        p3="We Build Things"
        buttontext="Get in Touch"
        IndexPage
      />
      <About
        num="01."
        titleline="What is SemiKolan?&#129300;&#129300;"
        content={semikolan.about.content}
      />
      <Skills num="02." elements={semikolan.skills} />

      <Work num="03." />
      <Achievements
        num="04."
        achievements={semikolan.achievements.slice(0, 6)}
      />

      <Community num="05." Community={semikolan.community.slice(0, 4)} />

      <Contact num="06." />

      <Footer social={semikolan.social} />
      <Helmet>
        <title>SemiKolan | Never Stop Building</title>
      </Helmet>
    </>
  );
}
