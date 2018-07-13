import React from 'react'
import { Provider as ReduxProvider } from 'react-redux'
import { Provider as CroodsProvider } from 'croods'
import { Auth } from 'croods-auth'

import './App.css'
import store from './store/store'

export default props => (
  <ReduxProvider store={store}>
    <CroodsProvider baseUrl="https://devise-token-auth.herokuapp.com">
      <Auth render={({ currentUser }) => <h1>Foo bar</h1>} />
    </CroodsProvider>
  </ReduxProvider>
)
