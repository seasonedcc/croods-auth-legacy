import ImportedAuth from './Auth'
import importedCreateReducer from './createReducer'
import importedAfterResponse from './credentials/afterResponse'
import importedHeaders from './credentials/headers'
import importedSignIn from './signIn/SignIn'
import importedSignUp from './signUp/SignUp'
import importedSignOut from './signOut/SignOut'
import importedDeleteAccount from './deleteAccount/DeleteAccount'

export const Auth = ImportedAuth
export const createReducer = importedCreateReducer
export const headers = importedHeaders
export const afterResponse = importedAfterResponse
export const SignIn = importedSignIn
export const SignUp = importedSignUp
export const SignOut = importedSignOut
export const DeleteAccount = importedDeleteAccount

export const credentials = {
  headers,
  afterResponse,
}
