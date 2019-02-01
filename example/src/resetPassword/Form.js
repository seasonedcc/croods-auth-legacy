import React from 'react'
import { reduxForm, Field } from 'redux-form'
import { required, length, confirmation } from 'redux-form-validators'

import createWithParams from './createWithParams'

export default reduxForm({ form: 'resetPassword' })(props => {
  const { handleSubmit, create, creating } = props
  const { error: reduxFormError, createError } = props
  const error = reduxFormError || createError

  return (
    <div>
      <form onSubmit={handleSubmit(createWithParams(create, props))}>
        <h2>Reset your password</h2>
        <Field
          type="password"
          name="password"
          label="Your new password"
          validate={[required(), length({ min: 8 })]}
          component="input"
        />
        <Field
          type="password"
          name="passwordConfirmation"
          label="Confirm your new password"
          validate={[required(), confirmation({ field: 'password' })]}
          component="input"
        />
        {error && <div>{error}</div>}

        <button
          type="submit"
          style={{ marginTop: 10 }}
          variant="contained"
          color="secondary"
          disabled={creating}
        >
          Reset Password
        </button>
      </form>
    </div>
  )
})
