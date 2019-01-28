import React, { cloneElement } from 'react'
import New from '../New'

import Created from '../Created'

export default props => {
  const { relativePath = '/auth/password' } = props

  return (
    <New {...props} name="auth.password" path={relativePath} defaultParse />
  )
}
