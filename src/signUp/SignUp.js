import React, { cloneElement } from 'react'
import { New } from 'croods'

import Created from '../Created'

export default props => {
  const {
    relativePath = '/auth',
    component: Component,
    redirectFunction,
    currentUser,
    setCurrentUser,
  } = props

  return (
    <New
      name="auth.signUp"
      path={relativePath}
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
