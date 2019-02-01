import responseCredentials from '../responseCredentials'

it('returns the correct credentials', () => {
  const headers = {
    get: credential => `foo ${credential}`,
  }
  const response = { headers }

  expect(responseCredentials(response)).toEqual({
    accessToken: 'foo access-token',
    client: 'foo client',
    expiry: 'foo expiry',
    tokenType: 'foo token-type',
    uid: 'foo uid',
  })
})
