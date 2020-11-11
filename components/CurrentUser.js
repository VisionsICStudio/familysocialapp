import React, { Component } from 'react';
import { NavItem } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class CurrentUser extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {
        firstname: '',
        lastname: '',
        birthGender: '',
        email: '',
        username: '',
        password: '',
        confirmPassword: false,
        address: '',
        altAddress: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        altPhone: '',
        admin: '',
        update: '',
        join: '',
        comment: '' 
      },
      isValid: false,
      users: []
    }
  }

  render() {
    const { CurrentUser } = this.state;
    return (
      <>
        <NavItem>
          <FontAwesomeIcon icon={["fas", "user"]} /> <span className="currentUser"> { CurrentUser.firstname } </span>
        </NavItem>
      </>
    )
  }
}

export default CurrentUser;
