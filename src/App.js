import React from "react";
import { Route, Switch } from "react-router-dom";
import "./styles/main.css";

import Navbar from "./components/navBar";
import Home from "./components/home";
import Contact from "./components/contact";
import GoogleApiWrapper from "./map/googlemap";
import Projects from "./components/projects";
import Blogs from "./components/blogs";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/maps" component={GoogleApiWrapper} />
      </Switch>
    </div>
  );
}

export default App;
