import ImportedAuth from './Auth'
import importedCreateReducer from './createReducer'
import importedAfterResponse from './credentials/afterResponse'
import importedHeaders from './credentials/headers'
import importedSignIn from './signIn/SignIn'

export const Auth = ImportedAuth
export const createReducer = importedCreateReducer
export const headers = importedHeaders
export const afterResponse = importedAfterResponse
export const SignIn = importedSignIn
