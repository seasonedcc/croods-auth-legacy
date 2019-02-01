import React from 'react'
import { ResetPassword } from 'croods-auth'
import { Redirect } from '@reach/router'
import Form from './Form'

export default props => {
  return (
    <ResetPassword
      {...props}
      render={({ create, creating, error }) => (
        <Form
          {...props}
          create={create}
          creating={creating}
          createError={error}
        />
      )}
      renderCreated={() => <Redirect to="/sign-in" noThrow />}
    />
  )
}
