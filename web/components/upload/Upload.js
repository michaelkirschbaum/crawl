import React, { Component } from 'react'
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
    // get projects
    fetch('http://localhost:8081/mockups/get')
      .then(res => res.json())
      .then(resJson => {
        this.setState({
          projects: resJson
        })
      })
  }

  onFileChange(event) {
    this.setState({file: event.target.files[0]})
  }

  onChange(event) {
    this.setState({name: event.target.value})
  }

  getSignedRequest(file) {
    fetch(`http:localhost:8081/mockups/signUrl?fileName=${file.name}`)
      .then(res => {
        if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`)
        return res.json()
      })
  }

  uploadFile(file, signedRequest, url) {
    const options = {
      method: 'PUT',
      body: file
    }
    return fetch(signedRequest, options)
      .then(res => {
        if (!res.ok) throw new Error(`${res.status}: ${res.statusText}`)
        return url
      })
  }

  handleSubmit(event) {
    this.getSignedRequest(this.state.file)
      .then(res => this.uploadFile(this.state.file, res.signedRequest, res.url))
      .then(url => {
        alert(url)
      })
      .catch(err => {
        console.error(err)
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
