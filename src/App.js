import Header from "./component/Header";
import Landing from "./component/Landing";
import AboutPage from "./pages/AboutPage";
import LinksPage from "./pages/LinksPage";
import About from "./component/About";
import Skills from "./component/Skills";
import Work from "./component/Work";
import Achievements from "./component/Achievements";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Map from "./component/Map";
import ContactForm from "./component/ContactForm";
import Join from "./component/Join";
import Error404 from "./component/Error404";
import BongoCat from "./component/BongoCat";
import Introduce from "./component/Introduce";
import Profile from "./component/Profile";
import semikolan from "./json/semikolan.json";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
import { Helmet } from "react-helmet";
import Showcase from "./pages/Showcase";
import Initiatives from "./pages/Initiatives";

export default function App() {
  return (
    
    <Router>
      
      <div class="container-80">
        <Switch>          
            <Route path="/about" render={(props) => <AboutPage {...props} />} />
            <Route path="/links" render={(props) => <LinksPage {...props} />} />
            <Route path="/showcase" render={(props) => <Showcase {...props} />} />
            <Route path="/initiatives" render={(props) => <Initiatives {...props} />} />
            <Route path="/contact" render={(props) => <Contact {...props} />} />

            
          <Route exact path="/dev/:name">
            <Profile />
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
