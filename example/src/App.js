import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { Provider as CroodsProvider } from 'croods'
import { Auth, credentials as credentialsProps } from 'croods-auth'
import { Router } from '@reach/router'
import Home from './Home'
import SignIn from './signIn/SignIn'
import SignUp from './signUp/SignUp'
import DeleteAccount from './deleteAccount/DeleteAccount'

import store from './store/store'
import './App.css'
import SignInOrSignUp from './SignInOrSignUp'
import CurrentUser from './CurrentUser'

export default props => (
  <ReduxProvider store={store}>
    <CroodsProvider
      baseUrl="https://croods-auth-api.herokuapp.com/"
      {...credentialsProps}
    >
      <Auth
        render={props => (
          <Router>
            <Home {...props} path="/" />
            <SignIn {...props} path="sign-in" />
            <SignUp {...props} path="sign-up" />
            <DeleteAccount {...props} path="delete-account" />
          </Router>
        )}
      />
    </CroodsProvider>
  </ReduxProvider>
)
