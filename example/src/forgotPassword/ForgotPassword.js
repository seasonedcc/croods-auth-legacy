import React from 'react'
import { ForgotPassword } from 'croods-auth'
import { Redirect } from '@reach/router'

import Form from './Form'

export default props => {
  return (
    <ForgotPassword
      {...props}
      render={({ create, creating, error }) => (
        <Form
          {...props}
          create={create}
          creating={creating}
          createError={error}
        />
      )}
      renderCreated={() => <Redirect to="/forgot-password/sent" noThrow />}
    />
  )
}
