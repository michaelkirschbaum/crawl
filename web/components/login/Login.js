import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      first: '',
      last: ''
    }
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit() {
    // verify credentials
    fetch(`http://localhost:8080/users/add?first=${this.state.first}&last=${this.state.last}`)
      .then(res => console.log(res))
      .catch(err => console.error(err))
  }

  render() {
    return (
      <div className="Login">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="first" onChange={this.onChange} placeholder="First name"/><br />
          <input type="text" name="last" onChange={this.onChange} placeholder="Last name"/><br />
          <input type="submit" value="Login"/>
        </form>
      </div>
    )
  }
}

export default Login
