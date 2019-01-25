import createWithParams from '../createWithParams'

it('executes create', () => {
  const create = jest.fn()
  const props = {
    location: { search: '?reset_password_token=abc' },
  }
  const data = {
    password: '123',
    passwordConfirmation: '123',
  }
  createWithParams(create, props)(data)

  expect(create).toHaveBeenCalledWith({ ...data, resetPasswordToken: 'abc' })
})
