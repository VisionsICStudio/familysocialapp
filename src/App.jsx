import React, { setState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { AppComponentProvider, storedData } from './providers/AppComponentProvider';
import Header from './layout/Header';
import Login from './pages/Login';
import Profile from './pages/Profile';
import About from './pages/About';
import Home from './pages/Home';
import Footer from './layout/Footer';
import { globalPosition } from './layout/CSS';
import './App.css';
import './style.scss';

let activeUsers = [];
let registeredUsers = [];
let loggedInUser = {
  id: 0,
  name: '',
  auth: false,
  isRegistered: false
}


function App(props) {

  updateloggedInUser = (loggedIn) => {
    loggedIn.id = loggedIn.id++;
    loggedIn.name = AppContentProvider.storedData.name;
    loggedIn.auth = true;
    loggedIn.isRegistered = true;
    return loggedIn;
  }

  updateRegisteredUsers = (regArr) => {
    regArr.push(storedData);
    return regArr;
  }

  updateActiveUsers = (activeArr) => {
    activeArr.push(storedData);
    return activeArr;
  }

  return (
    <BrowserRouter>
      <AppComponentProvider>
        <Header />
        <div className="container mt-2" style={ globalPosition } >
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
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
      </AppComponentProvider>
    </BrowserRouter>
  );
}

export default App;

