import * as index from '../index'

it('exports modules', () => {
  expect(index.Auth).not.toBe(undefined)
  expect(index.createReducer).not.toBe(undefined)
  expect(index.headers).not.toBe(undefined)
  expect(index.afterResponse).not.toBe(undefined)
  expect(index.SignIn).not.toBe(undefined)
  expect(index.SignUp).not.toBe(undefined)
  expect(index.SignOut).not.toBe(undefined)
  expect(index.DeleteAccount).not.toBe(undefined)
  expect(index.ForgotPassword).not.toBe(undefined)
  expect(index.ResetPassword).not.toBe(undefined)
})
