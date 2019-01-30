import React from 'react'
import renderer from 'react-test-renderer'

import ForgotPassword from '../ForgotPassword'

jest.mock('../../New', () => props => <div {...props}>New</div>)

it('renders correctly', () => {
  const props = { foo: 'bar' }
  const tree = renderer.create(<ForgotPassword {...props} />).toJSON()

  expect(tree).toMatchSnapshot()
})
