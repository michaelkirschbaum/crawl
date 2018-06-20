import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Menu extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </div>
    )
  }
}

export default Menu
