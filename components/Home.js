import React from 'react'
import { NavLink } from 'react-router-dom';
import { Jumbotron } from 'reactstrap';

const Home = () => {
  return (
    <>
      <Jumbotron>
        <img src="../graphics/family.png" alt="Family Heart Graphic"></img>
        <h5 className="display-3">Come. Share some love.</h5>
        <NavLink to="/dashboard/:id"> Dashboard </NavLink>
      </Jumbotron>
    </>
  )
}

export default Home;
