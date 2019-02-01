import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { email, required, length } from 'redux-form-validators'

export default reduxForm({ form: 'signIn' })(props => {
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
          placeholder="Insert your email"
          validate={[required(), email()]}
          component="input"
        />
        <Field
          style={{ width: 600, fontSize: 30 }}
          type="password"
          name="password"
          placeholder="password"
          validate={[required(), length({ min: 8 })]}
          component="input"
        />

        {error && <div style={{ color: 'red' }}>error</div>}

        <button
          type="submit"
          variant="contained"
          color="secondary"
          disabled={creating}
          style={{ marginTop: 10, fontSize: 40 }}
        >
          login
        </button>
      </form>
    </div>
  )
})
