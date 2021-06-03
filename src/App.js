import Header from "./component/Header";
import Landing from "./component/Landing";
import About from "./component/About";
import Skills from "./component/Skills"
import Work from "./component/Work"
import Achievements from "./component/Achievements"
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Technologies from "./component/Technologies";
import Map from "./component/Map";
import ContactForm from "./component/ContactForm";
import Join from "./component/Join";
import Error404 from "./component/Error404";
import Profile from "./component/userprofile/Profile";
import semikolan from './semikolan.json'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import { Helmet } from "react-helmet";



export default function App() {
 
  return (
    <Router>
      <Header />

      <div class="container-80">
        <Switch>
          <Route exact path="/about">
            <Landing
              lottiename="about"
              p1="This is all you need to know "
              p2="About Me"
              p3="What I am & What I do"
              buttontext="See my Skills"
            />
            <About num="01." removeViewMore />
            <Skills num="02." />
            <Technologies num="03." />

            <Helmet>
              <title>About | SemiKolan | Never Stop Building</title>
            </Helmet>
          </Route>

          <Route exact path="/showcase">
            <Landing
              lottiename="work"
              p1="I know you want to know, What are"
              p2="My Projects"
              p3="on which I have worked on"
              buttontext="View Projects"
            />
            <Work num="01." removeViewMore />

            <Helmet>
              <title>Work | SemiKolan | Never Stop Building</title>
            </Helmet>
          </Route>

          <Route exact path="/achievements">
            <Landing
              lottiename="achievements"
              p1="All I can show you is"
              p2="My Achievements"
              p3="Not the Best, but still Good"
              buttontext="Have a Look"
            />
            <Achievements
              num="01."
              achievements={semikolan.achievements}
              removeViewMore
            />

            <Helmet>
              <title>Achievements | SemiKolan | Never Stop Building</title>
            </Helmet>
          </Route>

          <Route exact path="/contact">
            <Landing
              lottiename="contact"
              p1="Now You Would like to"
              p2="Contact Us"
              p3="Send your Query"
              buttontext="Send Query"
            />
            <Map />
            <ContactForm />

            <Helmet>
              <title>Contact | SemiKolan | Never Stop Building</title>
            </Helmet>
          </Route>

          <Route exact path="/harsh">
            <Profile user="harsh" />
            <Helmet>
              <title>Harsh Vishwakarma | SemiKolan | Never Stop Building</title>
            </Helmet>
          </Route>

          <Route exact path="/join">
            <Landing
              lottiename="join"
              p1="Currently, We are Building"
              p2="Our Own Ecosystem"
              p3="Till then Join us through"
              buttontext="Scroll Down"
            />
            <Join num="01." />
            <Helmet>
              <title>Join | SemiKolan | Never Stop Building</title>
            </Helmet>
          </Route>
          {/* ======================================= */}
          {/* ======================================= */}
          <Route exact path="/">
            <Landing
              lottiename="home"
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
            <Contact num="5." />

            <Helmet>
              <title>SemiKolan | Never Stop Building</title>
            </Helmet>
          </Route>
        </Switch>

        <Route exact path="*">
          
          <Error404 />
          <Helmet>
            <title>404 | SemiKolan | Never Stop Building</title>
          </Helmet>
        </Route>
      </div>
      <Footer social={semikolan.social} />
    </Router>
  );
}
