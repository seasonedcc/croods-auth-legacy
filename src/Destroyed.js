import { Component } from 'react'

import { removeAsyncStorage } from './asyncStorage'

export default class extends Component {
  constructor(props) {
    super(props)
    const { setCurrentUser } = props

    setCurrentUser(null)
    removeAsyncStorage('authCredentials')
  }

  render() {
    const { renderDestroyed = () => null, ...props } = this.props
    return renderDestroyed(props)
  }
}
