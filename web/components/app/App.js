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

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
})

const ProtectedRoute = ({ component: Component }) => (
  <Route
    render={props =>
      false ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: '/login' }}/>
      )}
  />
)

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Switch>
          <Route path='/login' component={Login}/>
          <ProtectedRoute exact path='/' component={Dashboard}/>
          <ProtectedRoute path='/account' auth={this.props.isAuthenticated} component={Account}/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps)(hot(module)(App)))
