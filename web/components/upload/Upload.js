import React, { Component } from 'react'
import "./Upload.css"

class Upload extends Component {
  render() {
    return (
      <div className="Upload">
        <form>
          Design:
          <input type="textarea" name="design"/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Upload
