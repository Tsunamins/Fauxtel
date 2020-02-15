import React, { Component } from 'react';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SignInOptions from './SignInOptions'
import Login from '../components/Login'
import Signup from '../components/SignUp'

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
         
          <Switch>
            <Route path='/' render={(routerProps) => (<SignInOptions {...routerProps} loggedInStatus={this.props.isLoggedIn} />)} />
            <Route path='/login' render={(routerProps) => (<Login {...routerProps} handleLogin={this.handleLogin} loggedInStatus={this.props.isLoggedIn} />)} />
            <Route path='/signup' render={props => (<Signup {...props} handleLogin={this.handleLogin} loggedInStatus={this.state.isLoggedIn} /> )} />
            <Route path='/' render={props => (<SignInOptions {...props} handleLogout={this.handleLogout}  loggedInStatus={this.state.isLoggedIn}/>)} />
          </Switch>
        
      </div>
    );
  }
}

export default UserAuths;