import React from "react";
import "./App.css";
import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import About from "./components/About";
import Reset from "./components/Reset";
import ResetMain from "./components/ResetMain";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/reset">
          <Reset />
        </Route>
        <Route path="/resetmain/:token">
          <ResetMain />
        </Route>
      </Switch>
    </>
  );
};

export default App;
