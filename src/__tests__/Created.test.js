import React from 'react'
import renderer from 'react-test-renderer'

import Created from '../Created'

global.localStorage = {
  setItem: jest.fn(),
}

it('renders calls setItem', () => {
  const props = {
    setCurrentUser: jest.fn(),
    user: { foo: 'bar' },
    render: jest.fn(() => null),
  }
  renderer.create(<Created {...props} />)
  expect(props.render).toHaveBeenCalled()
  expect(props.setCurrentUser).toBeCalledWith(props.user)
})
