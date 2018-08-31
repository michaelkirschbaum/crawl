import React, { Component } from 'react'
import "./Account.css"

class Account extends Component {
  constructor(props) {
    super(props)
    this.state = {
      first: '',
      last: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:8080/users/get')
      .then(res => res.json())
      .then(resJson => {
        this.setState({ first: resJson[0].first })
        this.setState({ last: resJson[0].last })
      })
  }

  render() {
    var { first, last } = this.state

    return (
      <div className="Account">
        <h1>Settings</h1>

        User: {first} {last}
      </div>
    );
  }
}

export default Account
