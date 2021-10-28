import AboutPage from "./pages/AboutPage";
import LinksPage from "./pages/LinksPage";
import Contact from "./component/Contact";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import React from "react";
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
            <Route path="/about" render={(props) => <AboutPage {...props} />} />
            <Route path="/links" render={(props) => <LinksPage {...props} />} />
            <Route path="/showcase" render={(props) => <Showcase {...props} />} />
            <Route path="/initiatives" render={(props) => <Initiatives {...props} />} />
            <Route path="/contact" render={(props) => <Contact {...props} />} />
            <Route path="/join" render={(props) => <JoinPage {...props} />} />
            <Route path="/dev/:name" render={(props) => <ProfilePage {...props} />} />
            <Route path="/" render={(props) => <Home {...props} />} />
            <Route path="" render={(props) => <Error404Page {...props} />} />
        </Switch>
      </div>
    </Router>
  );
}
