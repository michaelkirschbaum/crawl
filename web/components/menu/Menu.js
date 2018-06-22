import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Menu.css"

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
        <Link to="/">Dashboard</Link>
        <Link to="/account">Account</Link>
      </div>
    )
  }
}

export default Menu
