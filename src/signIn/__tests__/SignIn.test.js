import React from 'react'
import renderer from 'react-test-renderer'

import SignIn from '../SignIn'

jest.mock('../../New', () => props => <div {...props}>New</div>)

it('renders correctly', () => {
  const props = { foo: 'bar' }
  const tree = renderer.create(<SignIn {...props} />).toJSON()

  expect(tree).toMatchSnapshot()
})
