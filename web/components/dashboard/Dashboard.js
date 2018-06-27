import React, { Component } from 'react'
import Upload from "../upload/Upload.js"
import "./Dashboard.css"

class Dashboard extends Component {
  render() {
    return (
      <div className="Dashboard">
        <Upload />
      </div>
    );
  }
}

export default Dashboard
