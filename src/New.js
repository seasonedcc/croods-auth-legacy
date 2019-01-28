import React, { cloneElement } from 'react'
import { New } from 'croods'

import Created from './Created'

export default props => {
  const {
    name,
    path,
    method = 'post',
    component: Component,
    successRedirect,
    currentUser,
    setCurrentUser,
    otherProps,
    defaultParse,
  } = props
  return (
    <New
      name={name}
      path={path}
      method={method}
      parseResponse={
        defaultParse ? undefined : ({ data }) => ({ created: data })
      }
      render={({ create, creating, error }) => {
        return (
          <Component
            {...otherProps}
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
