import createReducer from '../createReducer'

jest.mock('redux', () => ({
  combineReducers: reducers => reducers,
}))

jest.mock('croods', () => ({
  createReducer: reducer => reducer,
}))

it('returns all reducers', () => {
  expect(createReducer()).toMatchObject({
    currentUser: 'auth.currentUser',
    signUp: 'auth.signUp',
    signIn: 'auth.signIn',
    signOut: 'auth.signOut',
    deleteAccount: 'auth.deleteAccount',
    password: 'auth.password',
    resetPassword: 'auth.resetPassword',
  })
})
