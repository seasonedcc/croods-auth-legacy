import React from 'react'
import renderer from 'react-test-renderer'

import ResetPassword from '../ResetPassword'

jest.mock('../../New', () => props => <div {...props}>New</div>)

it('renders correctly', () => {
  const props = { foo: 'bar' }
  const tree = renderer.create(<ResetPassword {...props} />).toJSON()

  expect(tree).toMatchSnapshot()
})
