import React, { Component } from 'react'
import { connect } from 'react-redux'
import Project from '../project/Project'
import PropTypes from 'prop-types'
import { FadeLoader } from 'react-spinners'
import './Upload.css'

const mapStateToProps = null

const mapDispatchToProps = null

class Upload extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      file: null,
      projects: [],
      signedUrl: '',
      url: '',
      isLoading: false,
      errorStatus: null
    }
    this.onChange = this.onChange.bind(this)
    this.onFileChange = this.onFileChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.getImage = this.getImage.bind(this)
  }

  componentDidMount() {
    // get projects
    fetch('http://localhost:8081/mockups/get')
      .then(res => res.json())
      .then(resJson => {
        resJson.forEach(project => {
          // parse file name
          var uri = project.uri.split('/')
          var fileName = uri[uri.length - 1]

          this.getImage(fileName).then(url => {
            this.setState({
              projects: [...this.state.projects, {name: project.name, image: url}]
            })
          })
        })
      })
      .catch(err => console.error(err))
  }

  onChange(event) {
    this.setState({name: event.target.value})
  }

  onFileChange(event) {
    // set file
    this.setState({file: event.target.files[0]})

    // request pre-signed url
    fetch(`http://localhost:8081/mockups/signUrl?method=put&fileName=${event.target.files[0].name}&fileType=${event.target.files[0].type}`)
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
      .catch(err => console.error(err))
  }

  handleSubmit(event) {
    event.preventDefault()

    // save project
    fetch(`http://localhost:8081/mockups/add?name=${this.state.name}&location=${this.state.url}`, { method: "POST" })
      .then(res => console.log(res))
      .catch(err => console.error(err))

    // upload image to s3
    var options = {
      method: "PUT",
      body: this.state.file,
      headers: { 'Content-Type': this.state.file.type }
    }
    fetch(this.state.signedUrl, options)
      .then(res => {
        if (!res.ok) throw new error(`${response.status}: ${response.statusText}`)

        // append to projects
        fetch(`http://localhost:8081/mockups/signUrl?method=get&fileName=${this.state.file.name}`)
          .then(res => {
            if (!res.ok) throw new error('failed to get signed url')
            return res.json()
          })
          .then(resJson => {
            this.setState({ projects: [...this.state.projects, {name: this.state.name, image: resJson.signedRequest}] })
          })
          .catch(err => console.error(err))
      })
      .catch(err => console.error(err))
  }

  getImage(fileName) {
    return fetch(`http://localhost:8081/mockups/signUrl?method=get&fileName=${fileName}`)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new error('failed to get resource from s3')
        }
      })
      .then(resJson => {
        return resJson.signedRequest
      })
      .catch(err => {
        this.setState({ isLoading: false, errorStatus: err })
      })
  }

  render() {
    const { projects, isLoading, errorStatus } = this.state

    return (
      <div className="Upload">
        {isLoading}

        <h1>Projects</h1>

        <ul>
          {projects.map((project, i) => {
            return <li key={i}><Project name={project.name} image={project.image}></Project></li>
          })}
        </ul>

        <form onSubmit={this.handleSubmit}>
          Name: <input type="text" name="name" onChange={this.onChange} />
          <input type="file" accept="image/jpeg" name="mockup" onChange={this.onFileChange} />
          <input type="submit" value="Submit" />
        </form>

        {errorStatus}
      </div>
    )
  }
}

Upload.propTypes = {
  // isLoading: PropTypes.bool.isRequired
}

// export default connect(mapStateToProps, mapDispatchToProps)(Upload)
export default Upload
