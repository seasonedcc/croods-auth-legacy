import React from 'react'
import { SignIn } from 'croods-auth'
import { Redirect } from '@reach/router'

import Form from './Form'

export default props => {
  // if (props.currentUser) return <Redirect to="/" noThrow />

  return (
    <SignIn
      {...props}
      component={Form}
      successRedirect={() => <Redirect to="/" noThrow />}
    />
  )
}
