import React, { Component } from 'react'
import "./Upload.css"

class Upload extends Component {
  constructor(props) {
    super(props)
    this.state = {image: null}

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    alert('Upload was successful')
    event.preventDefault()
  }

  render() {
    return (
      <div className="Upload">
        <form onSubmit={this.handleSubmit}>
          <input type="file" name="design"/>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Upload
