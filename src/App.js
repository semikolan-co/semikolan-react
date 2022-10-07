import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import LinksPage from "./pages/LinksPage";
import Contact from "./pages/ContactPage";
import Showcase from "./pages/Showcase";
import Initiatives from "./pages/Initiatives";
import JoinPage from "./pages/JoinPage";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import Error404Page from "./component/Whatwedo";
import MovingCursor from "./component/MovingCursor";
// import MovingCursor from 'movingcursor'
import UnderConstruction from "./pages/UnderConstruction";
import EventsPage from "./pages/Events";
import Hacktober from "./pages/hacktober";

export default function App() {
  return (
    <>
      <MovingCursor />
      <Router>
        <div class="container-80">
          <Switch>
            <Route exact path="/" render={(props) => <Home {...props} />} />
            <Route
              exact
              path="/about"
              render={(props) => <AboutPage {...props} />}
            />
            <Route
              exact
              path="/links"
              render={(props) => <LinksPage {...props} />}
            />
            <Route
              exact
              path="/showcase"
              render={(props) => <Showcase {...props} />}
            />
            <Route
              exact
              path="/initiatives"
              render={(props) => <Initiatives {...props} />}
            />
            <Route
              exact
              path="/contact"
              render={(props) => <Contact {...props} />}
            />
            {/* <Route exact path="/join" render={(props) => <JoinPage {...props} />} /> */}
            <Route
              exact
              path="/dev/:name"
              render={(props) => <ProfilePage {...props} />}
            />
            <Route
              exact
              path="/underconstruction"
              render={(props) => <UnderConstruction {...props} />}
            />
            <Route
              exact
              path="/partners"
              render={(props) => <UnderConstruction {...props} />}
            />
            <Route
              exact
              path="/events"
              render={(props) => <EventsPage {...props} />}
            />
            <Route
              exact
              path="/resources"
              render={(props) => <UnderConstruction {...props} />}
            />
            <Route
              exact
              path="/roadmaps"
              render={(props) => <UnderConstruction {...props} />}
            />
            <Route
              exact
              path="/blogs"
              render={(props) => <UnderConstruction {...props} />}
            />
            <Route
              exact
              path="/join"
              render={(props) => <UnderConstruction {...props} />}
            />
            <Route
              exact
              path="/join/member"
              render={(props) => <UnderConstruction {...props} />}
            />
            <Route
              exact
              path="/join/team"
              render={(props) => <UnderConstruction {...props} />}
            />
            <Route
              exact
              path="/join/mentor"
              render={(props) => <UnderConstruction {...props} />}
            />
            <Route
              exact
              path="/projects"
              render={(props) => <UnderConstruction {...props} />}
            />
            <Route
              exact
              path="/projects/major"
              render={(props) => <UnderConstruction {...props} />}
            />
            <Route
              exact
              path="/projects/minor"
              render={(props) => <UnderConstruction {...props} />}
            />
            <Route
              exact
              path="/projects/mini"
              render={(props) => <UnderConstruction {...props} />}
            />
            <Route
              exact
              path="/videos"
              render={(props) => <UnderConstruction {...props} />}
            />
            <Route
              exact
              path="/newsletter"
              render={(props) => <UnderConstruction {...props} />}
            />
            <Route
              exact
              path="/devtalks"
              render={(props) => <UnderConstruction {...props} />}
            />
            <Route
              exact
              path="/devcalender"
              render={(props) => <UnderConstruction {...props} />}
            />
            <Route
              exact
              path="/badge"
              render={(props) => <UnderConstruction {...props} />}
            />
            <Route
              exact
              path="/support"
              render={(props) => <UnderConstruction {...props} />}
            />

            <Route
              exact
              path="/hacktoberfest"
              render={(props) => <Hacktober {...props} />}
            />

            <Route path="" render={(props) => <Error404Page {...props} />} />
          </Switch>
        </div>
      </Router>
    </>
  );
}
