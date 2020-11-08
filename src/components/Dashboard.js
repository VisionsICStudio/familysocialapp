import React, { Fragment } from 'react';
import Users from './Users';
import CurrentUser from './CurrentUser';
import UsersOnline from './UsersOnline';
import QuoteBox from './QuoteBox';

const Dashboard = (Users, CurrentUser, Blogs) => {
  return (
    <Fragment>
      <h6> Dashboard </h6>
      <QuoteBox />
    </Fragment>
  )
}

export default Dashboard;
