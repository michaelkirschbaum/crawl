import React, { Component } from 'react'
import "./Upload.css"

class Upload extends Component {
  constructor(props) {
    super(props)
    this.state = {file: null}
    this.onChange = this.onChange.bind(this)
  }

  onChange(event) {
    this.setState({file: URL.createObjectURL(event.target.files[0])})
  }

  render() {
    return (
      <div className="Upload">
        <h1>Projects</h1>
        <form>
          <input type="file" accept="image/png, image/jpeg" name="design" onChange={this.onChange} />
          <input type="submit" value="Submit" />
        </form>

        <img src={this.state.file} />
      </div>
    )
  }
}

export default Upload
