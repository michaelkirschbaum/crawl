import React, { Component } from 'react'
import { hot } from 'react-hot-loader'
import Dashboard from "../dashboard/Dashboard.js"
import Account from "../account/Account.js"
import Login from "../login/Login"
import Menu from "../menu/Menu"
import {
  Link,
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import "./App.css"

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

export default hot(module)(App)
