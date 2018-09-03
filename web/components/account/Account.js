import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthentication } from '../app/appActions'
import "./Account.css"

const mapDispatchToProps = dispatch => {
  return {
    setAuthentication: status => {
      dispatch(setAuthentication(status))
    }
  }
}

class Account extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first: '',
      last: ''
    }
    this.logout = this.logout.bind(this)
  }

  componentDidMount() {
    fetch('http://localhost:8080/users/get')
      .then(res => res.json())
      .then(resJson => {
        this.setState({ first: resJson[0].first })
        this.setState({ last: resJson[0].last })
      })
  }

  logout() {
    this.props.setAuthentication(false)
  }

  render() {
    var { first, last } = this.state

    return (
      <div className="Account">
        <h1>Settings</h1>
        <label>
          Hi {first} {last}!
        </label>
        <div>
          <button onClick={this.logout}>Logout</button>
        </div>
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Account)
