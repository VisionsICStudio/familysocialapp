/*
; =======================================================
; Title: HeaderComponent.js - familysocialapp - layout folder 
; Authors: Aaron Wilson
; Instructor: Sean Bernath
; Date: 08 November 2020
; Description: Build out app's Header component.
; Legend: [ Aaron Wilson ] -> Team member responsible
; for page.
; =======================================================
*/

import React, { Component, Fragment, useState } from 'react';
import logo from './graphics/fs-logo.png';
import Users from '../User';
import Dashboard from './components/Dashboard';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreatePost from './components/CreatePost';
import EditPost from './components/EditPost';
import Login from './components/Login';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const HeaderComponent = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  if(Users.users.length) {

    return (
      <Fragment>
        <header className="App-header">
          <Router>
            <Switch>
              <Route exact path="/" component={ Dashboard } />
              <Route path="/components/create-post" component={ CreatePost } />
              <Route path="/components/edit-post/:id" component={ EditPost } />
              <Route path="/components/login" component={ Login } />
            </Switch>
          </Router>
          <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <img src={logo} className="App-logo" alt="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/components/search"> Search <FontAwesomeIcon icon={["fas", "search"]} /> </NavLink>
                </NavItem>
                <NavItem>
                  <Users />
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </header>
      </Fragment>
    );
  } else {

    return (
      <Fragment>
        <header className="App-header">
          <Router>
            <Switch>
              <Route exact path="/" component={ Dashboard } />
              <Route path="/components/create-post" component={ CreatePost } />
              <Route path="/components/edit-post/:id" component={ EditPost } />
              <Route path="/components/login" component={ Login } />
            </Switch>
          </Router>
          <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <img src={logo} className="App-logo" alt="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavItem>
                  <NavLink href="/components/login"> Login </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/components/register"> Register </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </header>
      </Fragment>
    );
  }
} 

export default  HeaderComponent;
