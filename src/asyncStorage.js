import AsyncStorage from '@callstack/async-storage'

export const getAsyncStorage = async key => {
  const item = await AsyncStorage.getItem(key)

  if (item) {
    return JSON.parse(item)
  }
  return null
}

export const setAsyncStorage = async (key, value) =>
  AsyncStorage.setItem(key, JSON.stringify(value))

export const removeAsyncStorage = async key => AsyncStorage.removeItem(key)
