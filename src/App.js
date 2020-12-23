import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  return (
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="#/projects" component={Projects} />
      <Route exact path="#/contact" component={Contact} />
    </main>
  );
}

export default App;
