import React from 'react'
import Destroyed from '../Destroyed'

export default props => (destroy, { destroying, destroyed }) => {
  if (destroyed) {
    return <Destroyed {...props} />
  }
  return props.render({ ...props, destroy, destroying })
}
