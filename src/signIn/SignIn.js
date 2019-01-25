import React, { cloneElement } from 'react'
import { New } from 'croods'

import Created from './Created'

export default props => {
  const {
    path = '/auth/sign_in',
    component: Component,
    redirectFunction,
    currentUser,
    setCurrentUser,
  } = props
  console.log('props croods auth >>>', props)
  return (
    <New
      name="auth.signIn"
      path="/auth/sign_in"
      parseResponse={({ data }) => ({ created: data })}
      render={({ create, creating, error }) => {
        return (
          <Component
            currentUser={currentUser}
            setCurrentUser={setCurrentUser}
            create={create}
            creating={creating}
            error={error}
          />
        )
      }}
      renderCreated={created => (
        <Created {...props} redirect={redirectFunction} user={created} />
      )}
    />
  )
}
