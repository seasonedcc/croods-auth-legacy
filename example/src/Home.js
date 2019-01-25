import React from 'react'
import { Redirect } from '@reach/router'

export default props => {
  if (!props.currentUser) return <Redirect to="/sign-in" noThrow />

  return <div>HOME, {props.currentUser.email}</div>
}
