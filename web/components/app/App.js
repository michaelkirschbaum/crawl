import React, { Component, createContext } from 'react'
import "./App.css"
import { hot } from 'react-hot-loader'
import Menu from "../menu/Menu"
import Main from "../main/Main"
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
