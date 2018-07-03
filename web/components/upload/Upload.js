import React, { Component } from 'react'
import AWS from 'aws-sdk'
import uuid from 'uuid'
import "./Upload.css"

class Upload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      file: null,
      projects: []
    }
    this.onChange = this.onChange.bind(this)
    this.onFileChange = this.onFileChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    fetch('http://localhost:8081/mockups/get')
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          projects: resJson
        })
      })
  }

  onFileChange(event) {
    this.setState({file: URL.createObjectURL(event.target.files[0])})
  }

  onChange(event) {
    this.setState({name: event.target.value})
  }

  handleSubmit(event) {
    var s3 = new AWS.S3()

    var bucketName = 'crawlr' + uuid.v4()

    fetch('http://localhost:8081/mockups/add', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        uri: this.state.file
      }),
    })
  }

  render() {
    return (
      <div className="Upload">
        <h1>Projects</h1>

        <ul>
          {this.state.projects.map(project => {
              return <li>{project.name} {project.uri}</li>
          })}
        </ul>

        <form onSubmit={this.handleSubmit}>
          Name: <input type="text" name="name" onChange={this.onChange} />
          <input type="file" accept="image/png, image/jpeg" name="mockup" onChange={this.onFileChange} />
          <input type="submit" value="Submit" />
        </form>

        <img src={this.state.file} />
      </div>
    )
  }
}

export default Upload
