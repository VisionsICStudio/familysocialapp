import React, { Component, Fragment } from 'react';
import Users from './Users'
import { NavItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CurrentUser extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {
        
      },
      isValid: false,
    }
  }

  render() {
    return (
      <Fragment>
        <NavItem>
            <FontAwesomeIcon icon={["fas", "user"]} /> {} 
          </NavItem>
      </Fragment>
    )
  }
}

export default CurrentUser;
