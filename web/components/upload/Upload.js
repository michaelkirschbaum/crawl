import React, { Component } from 'react'
import "./Upload.css"

class Upload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      file: null
    }
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  onFileChange(event) {
    this.setState({file: URL.createObjectURL(event.target.files[0])})
  }

  onChange(event) {
    this.setState({name: event.target.value})
  }

  handleSubmit(event) {
    fetch('http://localhost:8081/mockups/add', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: 'test',
        uri: 'test'
      }),
    })
  }

  render() {
    return (
      <div className="Upload">
        <h1>Projects</h1>

        <ul>
          <li></li>
        </ul>

        <form onSubmit={this.handleSubmit}>
          Name: <input type="text" name="name" onChange={this.onChange} /><br />
          <input type="file" accept="image/png, image/jpeg" name="mockup" onFileChange={this.onFileChange} /><br />
          <input type="submit" value="Submit" />
        </form>

        <img src={this.state.file} />
      </div>
    )
  }
}

export default Upload
