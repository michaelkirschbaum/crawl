import React, { Component } from 'react'
import "./Account.css"
import Upload from "../upload/Upload.js"

class Account extends Component {
  render() {
    return (
      <div className="Account">
        <Upload />
      </div>
    );
  }
}

export default Account
