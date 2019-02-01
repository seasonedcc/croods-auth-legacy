import { setAsyncStorage } from '../asyncStorage'
import responseCredentials from './responseCredentials'

export default async response => {
  const newCredentials = responseCredentials(response)

  if (newCredentials.accessToken) {
    await setAsyncStorage('authCredentials', newCredentials)
  }
}
