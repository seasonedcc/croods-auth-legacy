import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { required, email } from 'redux-form-validators'

import createWithParams from './createWithParams'

export default reduxForm({ form: 'forgotPassword' })(props => {
  const { handleSubmit, create, creating } = props
  const { error: reduxFormError, createError } = props
  const error = reduxFormError || createError

  return (
    <div>
      <form onSubmit={handleSubmit(createWithParams(create))}>
        <h1>Did you forget your password?</h1>
        <Field
          type="email"
          name="email"
          label="Insert your email"
          validate={[required(), email()]}
          component="input"
        />

        {error && <div style={{ color: 'error' }}>{error}</div>}
        <button
          type="submit"
          variant="contained"
          color="secondary"
          disabled={creating}
          style={{ marginTop: 10 }}
        >
          Send
        </button>
      </form>
    </div>
  )
})
