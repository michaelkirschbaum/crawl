import React, { Component } from 'react'
import "./Account.css"

class Account extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
  }

  render() {
    var { name } = this.state

    return (
      <div className="Account">
        <h1>Settings</h1>

        {name}
      </div>
    );
  }
}

export default Account
