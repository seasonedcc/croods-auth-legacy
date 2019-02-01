import React from 'react'
import renderer from 'react-test-renderer'

import SignUp from '../SignUp'

jest.mock('../../New', () => props => <div {...props}>New</div>)

it('renders correctly', () => {
  const props = { foo: 'bar' }
  const tree = renderer.create(<SignUp {...props} />).toJSON()

  expect(tree).toMatchSnapshot()
})
