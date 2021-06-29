import Home from "./sites/Home";
import School from "./sites/school";
import Visitors from "./sites/visitors";
import Hosts from "./sites/hosts";
import Services from "./sites/services";
import About from "./sites/about";
import React, { Component } from "react";
import "./App.css"
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
// TODO: fix image scrolling by adding individually.
function App() {
  return (
    <Router>
    <Switch>
      <Route path="/about">
        <About/>
      </Route>
      <Route path="/school">
        <School/>
      </Route>
      <Route path="/services">
        <Services />
      </Route>
      <Route path="/hosts">
        <Hosts />
      </Route>
      <Route path="/visitors">
        <Visitors />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
    </Router>
  );
}

export default App;
