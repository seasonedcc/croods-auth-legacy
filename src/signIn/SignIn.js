import React, { cloneElement } from 'react'
import New from '../New'

import Created from '../Created'

export default props => {
  const { relativePath = '/auth/sign_in' } = props

  return <New {...props} name="auth.signIn" path={relativePath} />
}
