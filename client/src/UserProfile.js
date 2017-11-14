import React, { Component } from 'react';
import Logout from './Logout';
import Profile from './Profile';
import Campaigns from './Campaigns';
import NewCampaign from './NewCampaign';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  withRouter
} from 'react-router-dom';

class UserProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.user
    };
  }

  render() {
    return (
      <div className='UserProfileBox'>
        <p>Hello, {this.props.user.name}!</p>
        <a onClick={this.props.logout}>Logout</a>
        <Router>
          <div>
            <ul>
              <li>{this.props.user.name}</li>
              <Link to='/profile'>Profile</Link>
              {/* <Link to='/campaigns'>My Campaigns</Link> */}
              <Link to='/campaigns/new'>New Campaign</Link>
            </ul>
            <Route path='/profile' component={Profile} />
            {/* <Route path='/campaigns' render={(props) => (
              <Campaigns {...props} user={this.state.user} />
            )} /> */}
            <Route path='/campaigns/new' render={(props) => (
              <NewCampaign {...props} user={this.state.user} />
            )} />
          </div>
          
        </Router>
      </div>
    );
  }
}

export default UserProfile;