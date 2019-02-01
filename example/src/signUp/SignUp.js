import React from 'react'
import { SignUp } from 'croods-auth'
import { Redirect } from '@reach/router'

import Form from './Form'

export default props => {
  if (props.currentUser) return <Redirect to="/" noThrow />

  return (
    <SignUp
      {...props}
      render={({ create, creating, error }) => (
        <Form create={create} creating={creating} CreateError={error} />
      )}
      renderCreated={() => <Redirect to="/" noThrow />}
    />
  )
}
