import React from 'react'
import { Options } from 'croods'

import CurrentUser from './currentUser/CurrentUser'

export default ({ render, reducer = 'auth', renderLoading, ...props }) => (
  <Options
    render={options => (
      <CurrentUser
        {...props}
        renderLoading={
          renderLoading !== undefined ? renderLoading : options.renderLoading
        }
        reducer={reducer}
        render={(currentUser, { actions: { setInfo: setCurrentUser } }) =>
          render({ currentUser, setCurrentUser })
        }
      />
    )}
  />
)
