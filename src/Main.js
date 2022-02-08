import React from "react";
import { Route, Switch } from "react-router-dom";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Home from "./Home";
// import NotFound from "./NotFound";

const Main = () => {
  return (
    <main className="main">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        {/* <Route path="*">{ <NotFound /> }</Route> */}
      </Switch>
    </main>
  );
};

export default Main;
