import React from 'react'
import { DeleteAccount } from 'croods-auth'
import { Redirect } from '@reach/router'

import Button from './Button'

export default props => {
  if (!props.currentUser) return <Redirect to="/" noThrow />

  return (
    <DeleteAccount
      {...props}
      component={Button}
      successRedirect={() => <Redirect to="/" noThrow />}
    />
  )
}
