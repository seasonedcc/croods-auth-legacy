import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { Provider as CroodsProvider } from 'croods'
import { Auth, headers, afterResponse } from 'croods-auth'
import { Router } from '@reach/router'
import Home from './Home'
import SignIn from './signIn/SignIn'

import store from './store/store'
import './App.css'
import SignInOrSignUp from './SignInOrSignUp'
import CurrentUser from './CurrentUser'

export default props => (
  <ReduxProvider store={store}>
    <CroodsProvider
      baseUrl="https://croods-auth-api.herokuapp.com"
      headers={headers}
      afterResponse={afterResponse}
    >
      <Auth
        render={props => (
          <Router>
            <Home {...props} path="/" />
            <SignIn {...props} path="sign-in" />
          </Router>
        )}
      />
    </CroodsProvider>
  </ReduxProvider>
)
