import React from 'react'
import { SignIn } from 'croods-auth'
import { navigate, Redirect } from '@reach/router'

import Form from './Form'

export default props => {
  if (props.currentUser) return <Redirect to="/" noThrow />

  return (
    <SignIn
      {...props}
      component={Form}
      redirectFunction={() => <Redirect to="/" noThrow />}
    />
  )
}
