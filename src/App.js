import AboutPage from "./pages/AboutPage";
import LinksPage from "./pages/LinksPage";
import Contact from "./pages/ContactPage";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import React from "react";
import Showcase from "./pages/Showcase";
import Initiatives from "./pages/Initiatives";
import JoinPage from "./pages/JoinPage";
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import Error404Page from "./component/Whatwedo";

export default function App() {
  return (
    <Router>
      <div class="container-80">
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
