import headers from '../headers'

jest.spyOn(Storage.prototype, 'getItem')

describe('without stored credentials', () => {
  global.localStorage.getItem.mockReturnValueOnce(null)

  it('returns null', () => {
    expect(headers()).toBe(null)
  })
})

describe('with stored credentials', () => {
  global.localStorage.getItem.mockReturnValueOnce(
    JSON.stringify({
      accessToken: 'foo accessToken',
      expiry: 'foo expiry',
      tokenType: 'foo tokenType',
      uid: 'foo uid',
      client: 'foo client',
    }),
  )

  it('returns credentials', () => {
    expect(headers()).toEqual({
      'Access-Token': 'foo accessToken',
      Client: 'foo client',
      Expiry: 'foo expiry',
      'Token-Type': 'foo tokenType',
      Uid: 'foo uid',
    })
  })
})
