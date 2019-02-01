import React, { cloneElement } from 'react'
import New from '../New'

import Created from '../Created'

export default props => {
  const { relativePath = '/auth/password', location } = props

  return (
    <New
      {...props}
      method="put"
      name="auth.resetPassword"
      path={relativePath}
      otherProps={{ location }}
    />
  )
}
