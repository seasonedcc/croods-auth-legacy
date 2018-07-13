import { combineReducers } from 'redux'
import { createReducer } from 'croods'

export default (prefix = 'auth') =>
  combineReducers({
    currentUser: createReducer(`${prefix}.currentUser`),
    signUp: createReducer(`${prefix}.signUp`),
    signIn: createReducer(`${prefix}.signIn`),
    signOut: createReducer(`${prefix}.signOut`),
  })
