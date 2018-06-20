import React, { Component, createContext } from 'react'
import "./App.css"
import { hot } from 'react-hot-loader'
import Menu from "../Menu/Menu"
import Main from "../Main/Main"
import Settings from "../Settings/Settings.js"
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Main />
      </div>
    );
  }
}

export default hot(module)(App)
