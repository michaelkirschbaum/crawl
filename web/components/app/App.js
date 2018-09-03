import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import Dashboard from '../dashboard/Dashboard.js'
import Account from '../account/Account.js'
import Login from '../login/Login'
import Menu from '../menu/Menu'
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
    render={props => auth ? <Component /> : <Redirect to={{ pathname: '/login' }}/>}
  />
)

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Switch>
          <Route path='/login' component={Login}/>
          <ProtectedRoute path='/' auth={this.props.isAuthenticated} component={Dashboard}/>
          <ProtectedRoute path='/account' auth={this.props.isAuthenticated} component={Account}/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps)(hot(module)(App)))
