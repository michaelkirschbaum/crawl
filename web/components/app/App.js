import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import Dashboard from '../dashboard/Dashboard'
import Account from '../account/Account'
import Login from '../login/Login'
import Menu from '../menu/Menu'
import Register from '../register/Register'
import {
  Link,
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter,
  Redirect
} from 'react-router-dom'
import './App.css'

const mapStateToProps = state => {
  return {
    isAuthenticated: state.appReducer.isAuthenticated
  }
}

const ProtectedRoute = ({ component: Component, path, auth }) => (
  <Route
    {...path}
    render={props => auth ?
      <Component /> :
      <Redirect
        to={{
          pathname: '/login',
          state: { from: props.location }
        }}
      />
    }
  />
)

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/register' component={Register}/>
          <ProtectedRoute exact path='/' auth={this.props.isAuthenticated} component={Dashboard}/>
          <ProtectedRoute path='/account' auth={this.props.isAuthenticated} component={Account}/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps)(hot(module)(App)))
