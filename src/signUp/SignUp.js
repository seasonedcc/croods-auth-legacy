import React from 'react'
import New from '../New'

export default props => {
  const { relativePath = '/auth' } = props

  return <New {...props} name="auth.signUp" path={relativePath} />
}
