import React from 'react'
import { navigate } from '@reach/router'
import { New } from 'croods'

import Form from './Form'

export default () => {
  return (
    <New
      name="password"
      path="/admin_auth/password"
      render={({ create, creating, error }) => (
        <Form create={create} creating={creating} createError={error} />
      )}
      renderCreated={() => {
        navigate('/forgot-password/sent')
      }}
    />
  )
}
