import React from 'react'
import { SignOut } from 'croods-auth'
import { Redirect } from '@reach/router'

import Button from './Button'

export default props => (
  <SignOut
    {...props}
    render={({ destroy, destroying }) => (
      <Button {...props} destroy={destroy} destroying={destroying} />
    )}
    renderDestroyed={() => <Redirect to="/" noThrow />}
  />
)
