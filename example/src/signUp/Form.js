import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { email, required, length } from 'redux-form-validators'
import { Link } from '@reach/router'

export default reduxForm({ form: 'signUp' })(props => {
  const { handleSubmit, create, creating } = props
  const { error: reduxFormError, createError } = props
  const error = reduxFormError || createError

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
      }}
    >
      <form
        {...props}
        style={{
          marginTop: 100,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          width: '50%',
        }}
        onSubmit={handleSubmit(create)}
      >
        <Field
          style={{ width: 600, fontSize: 30 }}
          type="email"
          name="email"
          placeHolder="Insert your email"
          validate={[required(), email()]}
          component="input"
        />
        <Field
          style={{ width: 600, fontSize: 30 }}
          type="password"
          name="password"
          placeHolder="password"
          validate={[required(), length({ min: 8 })]}
          component="input"
        />
        <Field
          style={{ width: 600, fontSize: 30 }}
          type="password"
          name="passwordConfirmation"
          placeHolder="confirm your password"
          validate={[required(), length({ min: 8 })]}
          component="input"
        />

        <button
          type="submit"
          variant="contained"
          color="secondary"
          disabled={creating}
          style={{ marginTop: 10, fontSize: 40 }}
          onPress={handleSubmit(create)}
        >
          Register
        </button>
      </form>
    </div>
  )
})
