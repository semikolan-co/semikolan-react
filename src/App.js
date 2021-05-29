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
import Loader from "./component/Loader";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import { Helmet } from "react-helmet";

const achievements = [
  {
    icon: "baby-carriage",
    title: "2002",
    description:
      "On 7th of August 2002, I was Born and came into this world by winning the sperm race.",
  },
  {
    icon: "school",
    title: "2005",
    description:
      "Got Admission in School (D.M. Co. Ed Higher Secondary School) in Nursery Class, where I started learning things in a Structured manner",
  },
  {
    icon: "trophy",
    title: "2014",
    description: "Got First Prize in a School Level Science Exhibition.",
  },
  {
    icon: "laptop-code",
    title: "2016",
    description:
      "Completed my First Course on Programming i.e. HTML. and few months after completing this course I purchased a Laptop which is going to change the route of my life.",
  },
  {
    icon: "robot",
    title: "2015",
    description:
      "Got the Certficae for participating in a Workshop of Electronics, which started my interest in Electronics and Robotics. This is the beginning of me in the World of Robots.",
  },
  {
    icon: "book-open",
    title: "2018",
    description:
      "Somehow Succesfully Completed my X with 87.4% through an MP Board Affliated School and while Studying for X, I stopped Programming which was one of the worst decision i took.",
  },
  {
    icon: "award",
    title: "2019",
    description:
      "Got Preeti Bhandari Award for Creative Excellence as a Scholarship by Preet ki Asha for having keen Interest Robotics and making some Innovative Project",
  },
  {
    icon: "book-open",
    title: "2020",
    description:
      "Completed XII and Cracked JEE MAINS with a good Score and get Admission in University Institute of Technology, Rajeev Gandhi Produgiki VishwaVidhyalaya",
  },
  {
    icon: "medal",
    title: "2021",
    description:
      "Got Second Prize in Devoluthon a Digital Hackathon organized by Entreprenuership Cell, Rajiv Gandhi Proudyogiki Vishwavidhyalaya.",
  },
];



export default function App() {
 
  return (
    <Router>
      <Header />

      <div class="container-80">
        <Switch>
          <Route path="/about">
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
              <title>About | Harsh Vishwakarma | Pseudo Web Developer</title>
            </Helmet>
          </Route>

          <Route path="/work">
            <Landing
              lottiename="work"
              p1="I know you want to know, What are"
              p2="My Projects"
              p3="on which I have worked on"
              buttontext="View Projects"
            />
            <Work num="01." removeViewMore />

            <Helmet>
              <title>Work | Harsh Vishwakarma | Pseudo Web Developer</title>
            </Helmet>
          </Route>

          <Route path="/achievements">
            <Landing
              lottiename="achievements"
              p1="All I can show you is"
              p2="My Achievements"
              p3="Not the Best, but still Good"
              buttontext="Have a Look"
            />
            <Achievements
              num="01."
              achievements={achievements}
              removeViewMore
            />

            <Helmet>
              <title>
                Achievements | Harsh Vishwakarma | Pseudo Web Developer
              </title>
            </Helmet>
          </Route>

          <Route path="/contact">
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
              <title>Contact | Harsh Vishwakarma | Pseudo Web Developer</title>
            </Helmet>
          </Route>
          <Route path="/">
            <Landing
              lottiename="home"
              p1="Hii, My Name is "
              p2="Harsh Vishwakarma"
              p3="I Build Things for the Web"
              buttontext="Get in Touch"
            />
            <About num="01." />
            <Skills num="01.1" />
            <Work num="02." />
            <Achievements num="03." achievements={achievements.slice(0, 6)} />
            <Contact num="04." />

            <Helmet>
              <title>Harsh Vishwakarma | Pseudo Web Developer</title>
            </Helmet>
          </Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}
