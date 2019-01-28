import React, { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props)
    console.log('CHEGOU DENTRO DO CREATED', props)
    const { user, setCurrentUser } = props

    setCurrentUser(user)
  }

  render() {
    const { redirect: Redirect } = this.props
    return <Redirect />
  }
}
