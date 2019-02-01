export default response => ({
  accessToken: response.headers.get('access-token'),
  client: response.headers.get('client'),
  expiry: response.headers.get('expiry'),
  tokenType: response.headers.get('token-type'),
  uid: response.headers.get('uid'),
})
