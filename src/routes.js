import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Landing from "./Components/Landing/Landing";
import Portfolio from "./Components/Portfolio/Portfolio";
import Pricing from "./Components/Pricing/Pricing";

export default (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path='/about' component={About} />
    <Route path='/contact' component={Contact} />
    <Route path='/portfolio' component={Portfolio} />
    <Route path='/pricing' component={Pricing} />
  </Switch>
);
