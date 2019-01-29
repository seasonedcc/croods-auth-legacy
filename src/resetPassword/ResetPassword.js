import React from 'react'
import New from '../New'

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
