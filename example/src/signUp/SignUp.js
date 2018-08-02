import React from 'react'

export default ({ onSignIn }) => (
  <div>
    <h1>Sign up</h1>
    <p>
      Already have an account?{' '}
      <a href="#sign_in" onClick={onSignIn}>
        Sign in
      </a>.
    </p>
  </div>
)
