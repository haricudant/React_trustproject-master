import React from "react";
import Landing from "./Components/Master/Landing";
import Blog from "./Components/Master/Blog";
import Dashboard from "./Components/Master/Dashboard";
import "./App.css";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router basename = {process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <Route exact path="/blog">
          <Blog />
        </Route>
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
