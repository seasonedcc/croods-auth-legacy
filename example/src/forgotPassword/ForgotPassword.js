import React from 'react'
import { ForgotPassword } from 'croods-auth'
import { Redirect } from '@reach/router'

import Form from './Form'

export default props => {
  return (
    <ForgotPassword
      {...props}
      component={Form}
      successRedirect={() => <Redirect to="/forgot-password/sent" noThrow />}
    />
  )
}
