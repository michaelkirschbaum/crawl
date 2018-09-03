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
      first: '',
      last: '',
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
    const { first, last } = this.state

    this.authenticate(first, last)
      .then(() => this.setState({ redirect: true }))
      .catch(err => console.log(err))
  }

  authenticate(first, last) {
    return new Promise (
      function (resolve, reject) {
        if (first && last)
          resolve(first)
        else
          reject(new Error('authentication failed'))
      }
    )
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
          <input type="text" name="first" onChange={this.onChange} placeholder="First name"/><br />
          <input type="text" name="last" onChange={this.onChange} placeholder="Last name"/><br />
          <input type="submit" value="Login"/>
        </form>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(Login)
