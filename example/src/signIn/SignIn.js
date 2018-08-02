import React from 'react'

export default ({ onSignUp }) => (
  <div>
    <h1>Sign in</h1>
    <p>
      {"Don't have an account? "}
      <a href="#sign_up" onClick={onSignUp}>
        Sign up
      </a>.
    </p>
  </div>
)
