import React, { Component } from 'react'
import "./Upload.css"

class Upload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      file: null,
      projects: [],
      signedUrl: '',
      url: ''
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
        this.setState({ projects: resJson })
      })
      .catch(err => console.log(err))
  }

  onFileChange(event) {
    // set file
    this.setState({file: event.target.files[0]})

    // request pre-signed url
    fetch(`http://localhost:8081/mockups/signUrl?fileName=${event.target.files[0].name}&fileType=${event.target.files[0].type}`)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new error('request failed')
        }
      })
      .then(resJson => {
        this.setState({ signedUrl: resJson.signedRequest })
        this.setState({ url: resJson.url })
      })
      .catch(err => console.log(err))
  }

  onChange(event) {
    this.setState({name: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()

    var options = {
      method: "PUT",
      body: this.state.file,
      headers: { 'Content-Type': this.state.file.type }
    }

    // upload image to s3
    fetch(this.state.signedUrl, options)
      .then(res => {
        if (!res.ok) throw new Error(`${response.status}: ${response.statusText}`)
        alert("Project created!")
      })

    fetch(`http://localhost:8081/mockups/add?name=${this.state.name}&location=${this.state.url}`, { method: "POST" })
  }

  render() {
    return (
      <div className="Upload">
        <h1>Projects</h1>

        <form onSubmit={this.handleSubmit}>
          Name: <input type="text" name="name" onChange={this.onChange} />
          <input type="file" accept="image/png, image/jpeg" name="mockup" onChange={this.onFileChange} />
          <input type="submit" value="Submit" />
        </form>

        <ul>
          {this.state.projects.map(project => {
              return <li key={project._id}>{project.name} {project.uri}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default Upload
