import React from 'react'
import renderer from 'react-test-renderer'

import Created from '../Created'

it('renders correctly', () => {
  const user = 'foo'
  const setCurrentUser = jest.fn()
  const props = { user, setCurrentUser }

  const tree = renderer.create(<Created {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
  expect(setCurrentUser).toHaveBeenCalledWith(user)
})
