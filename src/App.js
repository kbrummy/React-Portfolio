import React from "react";
import { Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import "./App.css";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <CssBaseline>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </CssBaseline>
  );
}

export default App;
