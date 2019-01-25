import responseCredentials from './responseCredentials'

export default response => {
  const newCredentials = responseCredentials(response)

  if (newCredentials.accessToken) {
    localStorage.setItem('authCredentials', JSON.stringify(newCredentials))
  }
}
