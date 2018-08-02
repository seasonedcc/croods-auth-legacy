import React, { Component } from 'react'

import SignUp from './signUp/SignUp'
import SignIn from './signIn/SignIn'

export default class extends Component {
  constructor(props) {
    super(props)

    this.state = { selected: 'signUp' }
    this.onSignIn = this.handleSignIn.bind(this)
    this.onSignUp = this.handleSignUp.bind(this)
  }

  handleSignIn(event) {
    event.preventDefault()
    this.setState({ selected: 'signIn' })
  }

  handleSignUp(event) {
    event.preventDefault()
    this.setState({ selected: 'signUp' })
  }

  render() {
    const { selected } = this.state

    if (selected === 'signUp') {
      return <SignUp onSignIn={this.onSignIn} />
    }

    return <SignIn onSignUp={this.onSignUp} />
  }
}
