import React, { Component } from 'react'
import "./Upload.css"

class Upload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      file: null,
      projects: [],
      signedUrl: ''
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
    this.setState({file: event.target.files[0]})

    // request pre-signed url
    fetch(`http://localhost:8081/mockups/signUrl?fileName=${event.target.files[0]}`)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new error('request failed')
        }
      })
      .then(resJson => {
        this.setState({ signedUrl: resJson.signedRequest })
      })
      .catch(err => console.log(err))
  }

  onChange(event) {
    this.setState({name: event.target.value})
  }

  handleSubmit(event) {
    // upload image to s3
    fetch(this.state.signedUrl, {
      method: "POST",
      body: this.state.file
    })
    .then(res => res.json())
    .then(success => console.log('image uploaded successfully'))
    .catch(error => console.log('image upload failed'))
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
      </div>
    )
  }
}

export default Upload
