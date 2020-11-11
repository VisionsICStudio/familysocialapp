import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import FamilySocialAppProvider from './FamilySocialAppProvider';
import HeaderComponent from './Layout/HeaderComponent';
import CreatePost from './CreatePost';
import EditPost from './EditPost';
import EditUser from './EditUser';
import Post from './Post';
import Profile from './Profile';
import Dashboard from './Dashboard';
import Register from './Register';
import Login from './Login';
import Home from './Home';
import FooterComponent from './Layout/FooterComponent';
import '../App.css';


const App = () => {
  return (
    <FamilySocialAppProvider>
      <div className="App">
        <HeaderComponent />
        <Router>
          <Switch>
            <Route path="/create-post/:id">
              <CreatePost />
            </Route>
            <Route path="/edit-post/:id">
              <EditPost />
            </Route>
            <Route path="/edit-user/:id">
              <EditUser />
            </Route>
            <Route path="/post/:id">
              <Post />
            </Route>
            <Route exact path="/profile/:id">
              <Profile />
            </Route>
            <Route path="/dashboard/:id">
              <Dashboard />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
        <FooterComponent />
      </div>
    </FamilySocialAppProvider>
  )
}

export default App;
