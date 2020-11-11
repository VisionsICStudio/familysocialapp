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

import React, { useState } from 'react';
import { Router, NavLink } from 'react-router-dom'
import logo from '../../graphics/fs-logo.png';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavbarText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const HeaderComponent = (props) => {

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  if(true) {

    return (
      <>
        <header className="App-header">
          <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <img src={logo} className="App-logo" alt="logo" />
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <NavbarText>
                  Member: {'Current User'}
                </NavbarText>
                <Router>
                  <NavLink exact activeClass="active_class" to="/profile/:id"> Profile <FontAwesomeIcon icon={["fas", "user"]} /> </NavLink>
                  <NavLink exact activeClass="active_class" to="/components/search"> Blog <FontAwesomeIcon icon={["fas", "blog"]} /> </NavLink>
                  <NavLink exact activeClass="active_class" to="/logout"> Logout <FontAwesomeIcon icon={["fas", "delete"]} /> </NavLink>
                </Router>
              </Nav>
            </Collapse>
          </Navbar>
        </header>
      </>
    );
  } else {

    return (
      <>
        <header className="App-header">
          <Navbar color="light" light expand="md">
          <NavbarBrand href="/">
            <img src={logo} className="App-logo" alt="logo" />
          </NavbarBrand>
          <NavbarText>
            member: {'Guest'}
          </NavbarText>
          <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto" navbar>
                <Router>
                  <NavLink exact activeClassName="active_class" to="/login"> Login </NavLink>
                  <NavLink exact activeClassName="active_class" to="/register"> Register </NavLink>
                </Router>
              </Nav>
            </Collapse>
          </Navbar>
        </header>
      </>
    );
  }
} 

export default  HeaderComponent;
