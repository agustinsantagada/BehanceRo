import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import "./Main-Style.css";

const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="*">{<NotFound />}</Route>
      </Switch>
    </main>
  );
};

export default Main;
