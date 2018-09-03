import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthentication } from '../app/appActions'
import './Login.css'

const mapDispatchToProps = dispatch => {
  return {
    setAuthentication: status => {
      dispatch(setAuthentication(status))
    }
  }
}

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      redirect: false
    }
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.authenticate = this.authenticate.bind(this)
  }

  onChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit() {
    const { email, password } = this.state

    this.authenticate(email, password)
    //   .then(() => this.setState({ redirect: true }))
    //   .catch(err => console.log(err))
  }

  authenticate(email, password) {
    this.props.setAuthentication(true)
    this.setState({ redirect: true })
    /* return new Promise (
      function (resolve, reject) {
        if (email && password)
          resolve(email)
        else
          reject(new Error('authentication failed'))
      }
    ) */
  }

  render() {
    var { first, last, redirect } = this.state
    const from = { pathname: '/' }

    if (redirect)
      return <Redirect to={from}/>

    return (
      <div className="Login">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="email" onChange={this.onChange} placeholder="Email"/><br />
          <input type="text" name="password" onChange={this.onChange} placeholder="Password"/><br />
          <input type="submit" value="Login"/>
        </form>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(Login)
