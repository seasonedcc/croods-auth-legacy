import React from 'react'
import { SignUp } from 'croods-auth'
import { navigate, Redirect } from '@reach/router'

import Form from './Form'

export default props => {
  if (props.currentUser) return <Redirect to="/" noThrow />

  return (
    <SignUp
      {...props}
      component={Form}
      successRedirect={() => <Redirect to="/" noThrow />}
    />
  )
}
