import React from 'react'
import { reduxForm } from 'redux-form'

import { email, required, length } from 'redux-form-validators'

export default reduxForm({ form: 'signUp' })(props => {
  const { handleSubmit, create, creating } = props
  const { error: reduxFormError, createError } = props
  const error = reduxFormError || createError

  return (
    <Form onSubmit={handleSubmit(create)}>
      <FormControl style={{ width: '70%' }} fullWidth>
        <TextField
          type="email"
          name="email"
          label="Insert your email"
          validate={[required(), email()]}
        />
        <TextField
          type="password"
          name="password"
          label="password"
          validate={[required(), length({ min: 8 })]}
        />
        <TextField
          type="password"
          name="passwordConfirmation"
          label="confirm password"
          validate={[required(), length({ min: 8 })]}
        />
        {error && (
          <FormHelperText style={{ color: 'error' }}>{error}</FormHelperText>
        )}
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          disabled={creating}
          style={{ marginBottom: '20px' }}
        >
          create account
        </Button>
      </FormControl>
    </Form>
  )
})
