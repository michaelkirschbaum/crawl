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
    fetch('http://localhost:8081/mockups/get')
      .then((res) => res.json())
      .then((projects) => {
        projects.forEach(function(project) {
          this.setState({ projects: [...this.state.projects, project]})
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

        <form onSubmit={this.handleSubmit}>
          Name: <input type="text" name="name" onChange={this.onChange} /><br />
          <input type="file" accept="image/png, image/jpeg" name="mockup" onChange={this.onFileChange} /><br />
          <input type="submit" value="Submit" />
        </form>

        <img src={this.state.file} />
      </div>
    )
  }
}

export default Upload
