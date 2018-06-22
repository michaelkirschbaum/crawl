import React, { Component } from 'react'
import Dashboard from "../dashboard/Dashboard.js"
import Account from "../account/Account.js"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Dashboard}/>
        <Route path='/account' component={Account}/>
      </Switch>
    );
  }
}

export default Main
