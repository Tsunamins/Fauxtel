import React, { Component } from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class UserAuths extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isLoggedIn: false,
      user: {}
     };
  }

  componentDidMount() {
    this.loginStatus()
  }



  loginStatus = () => {
    return fetch('http://localhost:3000/logged_in', {
      credentials: 'include'
      })
    .then(response => {
      if (response.data.logged_in) {
        this.handleLogin(response)
      } else {
        this.handleLogout()
      }
    })
    .catch(error => console.log('api errors:', error))
  }

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
    isLoggedIn: false,
    user: {}
    })
  }

  render() {
    return (
      <div>
         <Router>
          <Switch>
            <Route exact path='/' component={}/>
            <Route exact path='/login' component={}/>
            <Route exact path='/signup' component={}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default UserAuths;