import { Component } from 'react'

export default class extends Component {
  constructor(props) {
    super(props)
    const { user, setCurrentUser } = props

    setCurrentUser(user)
  }

  render() {
    const { render, ...props } = this.props
    return render(props)
  }
}
