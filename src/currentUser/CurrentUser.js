import React from 'react'
import { Info } from 'croods'

import parseResponse from './parseResponse'
import render from './render'

export default props => (
  <Info
    name={`${props.reducer}.currentUser`}
    id="currentUser"
    path="/auth/validate_token"
    renderError={false}
    renderLoading={false}
    parseResponse={parseResponse}
    render={render(props)}
  />
)
