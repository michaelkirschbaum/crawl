import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom'
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

const RedirectButton = ({ route }) => {
  return (
    <button>
      <Link style={{ textDecoration: 'none', color: '#000000' }} to={route}>Register</Link>
    </button>
  )
}

export class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      redirectToReferrer: false
    }
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.authenticate = this.authenticate.bind(this)
  }

  onChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }

  handleSubmit(event) {
    event.preventDefault()

    const { email, password } = this.state
    this.authenticate(email, password)
      .then(res => {
        console.log(res)
        this.setState({ redirectToReferrer: true })
      })
      .catch(err => alert(err))
  }

  authenticate(email, password) {
    return new Promise (
      function (resolve, reject) {
        if (email == "" && password == "") {
          this.props.setAuthentication(true)
          resolve("authentication successful")
        }
        else {
          reject(new Error('authentication failed'))
        }
      }.bind(this)
    )
  }

  render() {
    var { first, last, redirectToReferrer } = this.state
    var { from } = this.props.location.state || { from: { pathname: '/' } }

    if (redirectToReferrer)
      return <Redirect to={from}/>

    return (
      <div className="Login">
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="email" onChange={this.onChange} placeholder="Email"/><br />
          <input type="password" name="password" onChange={this.onChange} placeholder="Password"/><br />
          <input type="submit" value="Login"/>
        </form>
        <RedirectButton route="/register"/>
      </div>
    )
  }
}

export default connect(null, mapDispatchToProps)(Login)
