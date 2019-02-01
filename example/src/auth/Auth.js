import React from 'react'

import CurrentUser from './currentUser/CurrentUser'

export default ({ render }) => (
  <CurrentUser
    render={(currentUser, { actions: { setInfo: setCurrentUser } }) =>
      render({ currentUser, setCurrentUser })
    }
  />
)
