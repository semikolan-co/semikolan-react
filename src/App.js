import AboutPage from "./pages/AboutPage";
import LinksPage from "./pages/LinksPage";
import Contact from "./component/Contact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";

import { Helmet } from "react-helmet";
import Captcha from "./component/Captcha";
import Projects from "./component/Projects";

import Showcase from "./pages/Showcase";
import Initiatives from "./pages/Initiatives";
import JoinPage from "./pages/JoinPage";
import Home from "./pages/Home";
import Error404Page from "./component/Whatwedo";
import ProfilePage from "./pages/ProfilePage";


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

          <Route exact path="/links">
            <Header />
            <Landing
              lottiename="links"
              redirect="#links"
              p1=""
              p2="Links"
              p3="All in one Place"
              buttontext=""
            />
            <Links />
            <Footer social={semikolan.social} />
            <Helmet>
              <title>Links | SemiKolan | Never Stop Building</title>
            </Helmet>
          </Route>
          <Route exact path="/captcha">
            <Captcha />
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
            <Projects num="01." removeViewMore />
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

        <Switch>          
            <Route exact path="/about" render={(props) => <AboutPage {...props} />} />
            <Route exact path="/links" render={(props) => <LinksPage {...props} />} />
            <Route exact path="/showcase" render={(props) => <Showcase {...props} />} />
            <Route exact path="/initiatives" render={(props) => <Initiatives {...props} />} />
            <Route exact path="/contact" render={(props) => <Contact {...props} />} />
            <Route exact path="/join" render={(props) => <JoinPage {...props} />} />
            <Route exact path="/dev/:name" render={(props) => <ProfilePage {...props} />} />
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route path="" render={(props) => <Error404Page {...props} />} />

        </Switch>
      </div>
    </Router>
  );
}
