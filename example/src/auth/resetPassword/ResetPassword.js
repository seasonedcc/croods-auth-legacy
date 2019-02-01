import React from 'react'
import { New } from 'croods'
import { navigate } from '@reach/router'

import Form from './Form'

export default props => {
  return (
    <New
      name="resetPassword"
      method="put"
      path="/auth/password"
      render={({ create, creating, error }) => (
        <Form
          create={create}
          creating={creating}
          createError={error}
          location={props.location}
        />
      )}
      renderCreated={() => {
        navigate('/sign-in')
      }}
    />
  )
}
