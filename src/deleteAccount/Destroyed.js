import React, { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props)
    const { setCurrentUser } = props

    setCurrentUser(null)
    localStorage.removeItem('authCredentials')
  }

  render() {
    const { successRedirect: Redirect } = this.props
    return Redirect ? <Redirect /> : null
  }
}
