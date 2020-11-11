import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import logo from '../fs-logo.png';
import { logoStyle, headerStyle } from './CSS'

const Header = ({ history }) => {
  const [isOpen, setOpen] = useState(false);

  const isAuth = !!localStorage.getItem("token");

  const logoutUser = () => {
    localStorage.removeItem("token");
    history.push("/");
  };

  const token = '/dashboard/fullsailstudent';

  return (
    <nav className="navbar is-white shadow p-3 mb-5 bg-white rounded" style={ headerStyle } role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a role="button" className={`navbar-burger burger ${isOpen && "is-active"}`} aria-label="menu" aria-expanded="false" onClick={() => setOpen(!isOpen)}>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div className={`navbar-menu ${isOpen && "is-active"}`}>
          <div className="navbar-start">
            <div className="navbar-brand">
              <img src={ logo } style={ logoStyle } className="App-logo" alt="logo" />
            </div>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {!isAuth ? (
                  <>
                    <NavLink className="button is-info" activeClassName="is-active" to="/" exact>
                    Home
                    </NavLink>
                  
                    <NavLink className="button is-info" activeClassName="is-active" to="/about">
                    About
                    </NavLink>
                  
                    <NavLink className="button is-success" activeClassName="is-active" to="/login">
                    Log in
                    </NavLink>
                  </>
                ) : (
                  <>
                    <NavLink className="button is-info" activeClassName="is-active" to="/profile/fullsailstudent">
                    Profile
                    </NavLink>
                    <NavLink className="button is-info" activeClassName="is-active" to="/blog/fullsailstudent">
                    Blog
                    </NavLink>
                    <button className="button is-danger logoutBtn" type="button" onClick={logoutUser}>
                    Log out
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(Header);
