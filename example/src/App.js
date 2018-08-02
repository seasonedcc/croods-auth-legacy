import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { Provider as CroodsProvider } from 'croods'
import { Auth } from 'croods-auth'

import store from './store/store'
import './App.css'
import SignInOrSignUp from './SignInOrSignUp'
import CurrentUser from './CurrentUser'

export default props => (
  <ReduxProvider store={store}>
    <CroodsProvider baseUrl="https://devise-token-auth.herokuapp.com">
      <Auth
        render={({ currentUser }) =>
          currentUser ? <CurrentUser {...currentUser} /> : <SignInOrSignUp />
        }
      />
    </CroodsProvider>
  </ReduxProvider>
)
