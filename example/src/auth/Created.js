import { Component } from 'react'
import { navigate } from '@reach/router'

export default class extends Component {
  constructor(props) {
    super(props)
    const { user, setCurrentUser } = props

    setCurrentUser(user)
    navigate('/')
  }

  render() {
    return null
  }
}
