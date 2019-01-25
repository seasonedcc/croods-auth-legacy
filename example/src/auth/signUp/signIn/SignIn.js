import React from 'react'
import { New } from 'croods'
import { Redirect } from '@reach/router'

import Form from './Form'
import Created from '../Created'

export default props => {
  if (props.currentUser) return <Redirect to="/" noThrow />

  return (
    <New
      name="signIn"
      path="/auth/sign_in"
      parseResponse={({ data }) => ({ created: data })}
      render={({ create, creating, error }) => {
        return <Form create={create} creating={creating} createError={error} />
      }}
      renderCreated={created => <Created {...props} user={created} />}
    />
  )
}
