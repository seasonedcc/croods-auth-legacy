import React from 'react'
import { reduxForm } from 'redux-form'
import { FormControl, Button, FormHelperText } from '@material-ui/core'
import { required, length, confirmation } from 'redux-form-validators'

import Form from '../Form'
import TextField from '../../form/TextField'
import createWithParams from './createWithParams'

export default reduxForm({ form: 'resetPassword' })(props => {
  const { handleSubmit, create, creating } = props
  const { error: reduxFormError, createError } = props
  const error = reduxFormError || createError

  return (
    <Form onSubmit={handleSubmit(createWithParams(create, props))}>
      <h2>Reset your password</h2>
      <FormControl style={{ width: '70%' }} fullWidth>
        <TextField
          type="password"
          name="password"
          label="Your new password"
          validate={[required(), length({ min: 8 })]}
        />
        <TextField
          type="password"
          name="passwordConfirmation"
          label="Confirm your new password"
          validate={[required(), confirmation({ field: 'password' })]}
        />
        {error && <FormHelperText>{error}</FormHelperText>}

        <Button
          type="submit"
          style={{ marginTop: 10 }}
          variant="contained"
          color="secondary"
          disabled={creating}
        >
          Reset Password
        </Button>
      </FormControl>
    </Form>
  )
})
