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
import Whatwedo from "./component/Whatwedo";
import BongoCat from "./component/BongoCat";
import Introduce from "./component/Introduce";
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
      <div class="container-80">
        <Switch>
          <Route exact path="/about">
            <Header />
            <Landing
              lottiename="about"
              redirect="#about"
              p1="This is all you need to know"
              p2="About Us"
              p3="Who we are & What we do"
              buttontext="Know more"
            />
            <About
              num="01."
              titleline="What is SemiKolan?&#129300;&#129300;"
              content={semikolan.about.content}
              removeViewMore
            />
            <Whatwedo num="03." titleline="What we do" />
            <Technologies num="03." technologies={semikolan.technologies} />

            <Footer social={semikolan.social} />
            <Helmet>
              <title>About | SemiKolan | Never Stop Building</title>
            </Helmet>
          </Route>

          <Route path="/showcase">
            <Header />
            <Landing
              lottiename="work"
              redirect="#work"
              p1="Ding Ding! Presenting"
              p2="Semikolan Showcase"
              p3="Collection of our projects"
              buttontext="View Projects"
            />
            <Work num="01." removeViewMore />

            <Footer social={semikolan.social} />
            <Helmet>
              <title>Showcase | SemiKolan | Never Stop Building</title>
            </Helmet>
          </Route>

          <Route exact path="/initiatives">
            <Header />
            <Landing
              lottiename="achievements"
              redirect="#billi"
              p1=""
              p2="Our Initiatives"
              p3="Things we're building for the world!"
              buttontext="Have a Look"
            />
            <BongoCat />

            <Footer social={semikolan.social} />
            <Helmet>
              <title>Initiatives | SemiKolan | Never Stop Building</title>
            </Helmet>
          </Route>

          <Route exact path="/contact">
            <Header />
            <Landing
              lottiename="contact"
              redirect="#contact"
              p1="Now You Would like to"
              p2="Contact Us"
              p3="Send your Query"
              buttontext="Send Query"
            />
            <Map />
            <ContactForm />

            <Footer social={semikolan.social} />
            <Helmet>
              <title>Contact | SemiKolan | Never Stop Building</title>
            </Helmet>
          </Route>

          <Route exact path="/harsh">
            <Profile user="harsh" />
            <Footer social={semikolan.social} />
            <Helmet>
              <title>Harsh Vishwakarma | SemiKolan | Never Stop Building</title>
            </Helmet>
          </Route>

          <Route exact path="/join">
            <Header />
            <Landing
              lottiename="join"
              redirect="#work"
              p1="Currently, We are Building"
              p2="Our Own Ecosystem"
              p3="Till then Join us through"
              buttontext="Scroll Down"
            />
            <Join num="01." />
            <Footer social={semikolan.social} />
            <Helmet>
              <title>Join | SemiKolan | Never Stop Building</title>
            </Helmet>
          </Route>
          <Route exact path="/introduce">
            <Introduce />
            <Helmet>
              <title>Join | SemiKolan | Never Stop Building</title>
            </Helmet>
          </Route>
          {/* ======================================= */}
          {/* ======================================= */}
          <Route exact path="/">
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
            <Contact num="5." />

            <Footer social={semikolan.social} />
            <Helmet>
              <title>SemiKolan | Never Stop Building</title>
            </Helmet>
          </Route>

          <Route exact path="">
            <Error404 />

            <Footer social={semikolan.social} />
            <Helmet>
              <title>404 | SemiKolan | Never Stop Building</title>
            </Helmet>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
