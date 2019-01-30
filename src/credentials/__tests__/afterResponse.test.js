import afterResponse from '../afterResponse'

global.localStorage = {
  setItem: jest.fn(),
}

afterEach(() => {
  jest.clearAllMocks()
})

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
  it('DOES NOT stores credentials', () => {
    const headers = {
      get: () => undefined,
    }
    const response = { headers }

    afterResponse(response)
    expect(global.localStorage.setItem).not.toHaveBeenCalled()
  })
})
