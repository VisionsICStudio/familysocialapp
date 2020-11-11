import React from "react";
import { Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { tronStyle, heartStyle, mottoStyle, linkStyle } from '../layout/CSS';
import heart from '../graphics/png/family.png';

const Home = () => (
  <>
    <Jumbotron style={ tronStyle }>
      <img src={ heart } style={ heartStyle } alt="Family Heart Graphic" />
      <span className="display-block align-bottom">
        <h5 className="display-4 text-center align-text-bottom" style={ mottoStyle } >Come. Share some love.</h5>
      </span>
      
    </Jumbotron>
    <div class="has-text-centered">
      <NavLink className="button is-success registerBtn" style={ linkStyle } to="/register"> Register </NavLink>
    </div>
  </>
);

export default Home;
