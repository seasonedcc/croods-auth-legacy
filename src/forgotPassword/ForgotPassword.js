import React from 'react'
import New from '../New'

export default props => {
  const { relativePath = '/auth/password' } = props

  return (
    <New {...props} name="auth.password" path={relativePath} defaultParse />
  )
}
