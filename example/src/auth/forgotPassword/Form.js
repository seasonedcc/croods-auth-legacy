import React from 'react'
import { reduxForm } from 'redux-form'
import { FormControl, Button, FormHelperText } from '@material-ui/core'
import { required, email } from 'redux-form-validators'

import Form from '../Form'
import TextField from '../../form/TextField'
import createWithParams from './createWithParams'

export default reduxForm({ form: 'forgotPassword' })(props => {
  const { handleSubmit, create, creating } = props
  const { error: reduxFormError, createError } = props
  const error = reduxFormError || createError

  return (
    <Form onSubmit={handleSubmit(createWithParams(create))}>
      <h1>Did you forget your password?</h1>
      <FormControl style={{ width: '70%' }} fullWidth>
        <TextField
          type="email"
          name="email"
          label="Insert your email"
          validate={[required(), email()]}
        />

        {error && (
          <FormHelperText style={{ color: 'error' }}>{error}</FormHelperText>
        )}
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          disabled={creating}
          style={{ marginTop: 10 }}
        >
          Send
        </Button>
      </FormControl>
    </Form>
  )
})
