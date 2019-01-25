import createWithParams from '../createWithParams'

it('executes create', () => {
  const create = jest.fn()
  createWithParams(create)({ email: 'abc' })

  expect(create).toHaveBeenCalledWith({
    email: 'abc',
    redirectUrl: `${process.env.REACT_APP_URL}/reset-password`,
  })
})
