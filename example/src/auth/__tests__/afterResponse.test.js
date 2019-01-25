import afterResponse from '../afterResponse'

jest.spyOn(Storage.prototype, 'setItem')

describe('with accessToken', () => {
  it('stores credentials', () => {
    const headers = {
      get: credential => `foo ${credential}`,
    }
    const response = { headers }

    afterResponse(response)
    expect(global.localStorage.setItem).toHaveBeenCalledWith(
      'authCredentials',
      JSON.stringify({
        accessToken: 'foo access-token',
        client: 'foo client',
        expiry: 'foo expiry',
        tokenType: 'foo token-type',
        uid: 'foo uid',
      }),
    )
  })
})

describe('without accessToken', () => {
  it('does not store credentials', () => {
    const headers = { get: () => null }
    const response = { headers }
    global.localStorage.setItem.mockClear()

    afterResponse(response)
    expect(global.localStorage.setItem).not.toHaveBeenCalled()
  })
})
