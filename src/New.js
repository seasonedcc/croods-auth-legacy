import React, { cloneElement } from 'react'
import { New } from 'croods'

import Created from './Created'

export default props => {
  const {
    name,
    path,
    component: Component,
    successRedirect,
    currentUser,
    setCurrentUser,
  } = props

  return (
    <New
      name={name}
      path={path}
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
        <Created {...props} redirect={successRedirect} user={created} />
      )}
    />
  )
}
