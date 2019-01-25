import React from 'react'
import { New } from 'croods'
import Form from './Form'
import Created from '../Created'

export default props => (
  <New
    name="signUp"
    path="/auth"
    parseResponse={({ data }) => ({ created: data })}
    render={({ create, creating, error }) => {
      return <Form create={create} creating={creating} createError={error} />
    }}
    renderCreated={created => <Created {...props} user={created} />}
  />
)
