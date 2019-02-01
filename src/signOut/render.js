import React from 'react'
import Destroyed from '../Destroyed'

export default ({ render, ...props }) => (
  destroy,
  { destroying, destroyed },
) => {
  if (destroyed) {
    return <Destroyed {...props} />
  }

  return render({ ...props, destroy, destroying })
}
