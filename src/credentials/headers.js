export default () => {
  const credentials = JSON.parse(localStorage.getItem('authCredentials'))

  if (!credentials) {
    return null
  }

  return {
    'Access-Token': credentials.accessToken,
    Expiry: credentials.expiry,
    'Token-Type': credentials.tokenType,
    Uid: credentials.uid,
    Client: credentials.client,
  }
}
