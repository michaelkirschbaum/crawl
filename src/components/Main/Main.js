import React, { Component } from 'react'
import Home from "../Home/Home.js"
import Settings from "../Settings/Settings.js"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/settings' component={Settings}/>
      </Switch>
    );
  }
}

export default Main
