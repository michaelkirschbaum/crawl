import React, { Component } from 'react'
import './Register.css'

export class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first: '',
      last: '',
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()

    const { first, last, email, password } = this.state
    fetch(`http://localhost:8080/users/add?first=${first}&last=${last}&email=${email}&password=${password}`, { method: "POST" })
      .then(res => this.props.history.push('/'))
      .catch(err => console.log(err))
  }

  onChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  render() {
    return (
      <div className="Register">
        <h1>Register</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="first" onChange={this.onChange} placeholder="First name"/><br />
          <input type="text" name="last" onChange={this.onChange} placeholder="Last name"/><br />
          <input type="text" name="email" onChange={this.onChange} placeholder="Email"/><br />
          <input type="password" name="password" onChange={this.onChange} placeholder="Password"/><br />
          <input type="submit" value="Register"/>
        </form>
      </div>
    )
  }
}

export default Register
