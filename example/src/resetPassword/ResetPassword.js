import React from 'react'
import { ResetPassword } from 'croods-auth'
import { Redirect } from '@reach/router'
import Form from './Form'

export default props => {
  return (
    <ResetPassword
      {...props}
      component={Form}
      successRedirect={() => <Redirect to="/sign-in" noThrow />}
      location={props.location}
    />
  )
}
