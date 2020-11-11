/*
; =======================================================
; Title: Users.js ( FamilySocial App - root folder )
; Authors: Aaron Wilson
; Instructor: Sean Bernath
; Date: 08 November 2020
; Description: Build out app's users.
; Legend: [ Aaron Wilson ] -> Team member responsible
; for page.
; =======================================================
*/

import React, { Component, Fragment } from 'react';

class User extends Component {

  constructor() {
    super();
    this.quoteURL= '';
    this.state = {
      User: {
        firstname: '',
        lastname: '',
        birthGender: {
          male: false,
          female: false
        },
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        isConfirmed: false,
        address: '',
        altAddress: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        altPhone: '',
        admin: {
          yes: false,
          no: false
        },
        updates: {
          yes: false,
          no: false
        },
        join: {
          yes: false,
          no: false
        },
        comments: '',
        image: '',
        blogs: [],
      },
      isLoggedOn: false
    }
  }
}

export default User;
