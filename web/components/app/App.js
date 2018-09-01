import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import { connect } from 'react-redux'
import { setAuthentication } from './appActions'
import Dashboard from "../dashboard/Dashboard.js"
import Account from "../account/Account.js"
import Login from "../login/Login"
import Menu from "../menu/Menu"
import {
  Link,
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from 'react-router-dom'
import "./App.css"

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated
})

const mapDispatchToProps = dispatch => {
  return {
    setAuthentication: status => {
      dispatch(setAuthentication(status))
    }
  }
}

const ProtectedRoute = () => (
  <Route
    render={<Component />}
  />
)

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Switch>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/login' component={Login}/>
          <Route path='/account' component={Account}/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(hot(module)(App)))
