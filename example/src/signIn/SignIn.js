import React from 'react'
import { SignIn } from 'croods-auth'
import { Redirect } from '@reach/router'

import Form from './Form'

export default props => {
  // if (props.currentUser) return <Redirect to="/" noThrow />

  return (
    <SignIn
      {...props}
      render={({ create, creating, error }) => (
        <Form create={create} creating={creating} error={error} />
      )}
      renderCreated={() => <Redirect to="/" noThrow />}
    />
  )
}
