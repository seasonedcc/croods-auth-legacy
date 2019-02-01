import React from 'react'
import { New } from 'croods'

import Created from './Created'

export default props => {
  const {
    name,
    path,
    method = 'post',
    currentUser,
    setCurrentUser,
    defaultParse,
    render,
    renderCreated,
    ...otherProps
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
        return render({
          create,
          creating,
          error,
          currentUser,
          setCurrentUser,
          ...otherProps,
        })
      }}
      renderCreated={created => (
        <Created {...props} render={renderCreated} user={created} />
      )}
    />
  )
}
