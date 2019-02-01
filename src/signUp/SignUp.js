import React, { cloneElement } from 'react'
import New from '../New'

import Created from '../Created'

export default props => {
  const { relativePath = '/auth' } = props

  return <New {...props} name="auth.signUp" path={relativePath} />
}
