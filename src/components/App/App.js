import React, { Component, createContext } from 'react'
import "./App.css"
import { hot } from 'react-hot-loader'
import Menu from "../Menu/Menu.js"
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
      </div>
    );
  }
}

export default hot(module)(App)
