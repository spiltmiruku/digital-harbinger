import React from "react";
import { Switch, Route } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Landing from "./Components/Landing/Landing";
import Portfolio from "./Components/Portfolio/Portfolio";
import Pricing from "./Components/Pricing/Pricing";

export default (
  <Switch>
    <Route exact path="/" componenet={Landing} />
    <Route path='/about' componenet={About} />
    <Route path='/contact' componenet={Contact} />
    <Route path='/portfolio' componenet={Portfolio} />
    <Route path='/pricing' componenet={Pricing} />
  </Switch>
);
