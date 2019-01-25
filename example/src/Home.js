import React from 'react'
import { Redirect } from '@reach/router'

import SignOut from './signOut/SignOut'
export default props => {
  if (!props.currentUser) return <Redirect to="/sign-in" noThrow />

  return (
    <div>
      <div>
        <SignOut {...props} />
      </div>
      HOME, {props.currentUser.email}
    </div>
  )
}
