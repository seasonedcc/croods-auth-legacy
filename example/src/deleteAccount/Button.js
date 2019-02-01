import React from 'react'

export default ({ destroy }) => (
  <a
    className="navbar-link"
    href="#destroy"
    onClick={event => {
      event.preventDefault()
      destroy()
    }}
  >
    Deletar conta
  </a>
)
