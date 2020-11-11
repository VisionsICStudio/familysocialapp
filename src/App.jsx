import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './layout/Header';
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Home from "./pages/Home";
import Footer from "./layout/Footer";
import { globalPosition } from './layout/CSS';
import './App.css';
import './style.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="container mt-2" style={ globalPosition } >
        <Switch>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/profile/:name">
            <Profile />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

