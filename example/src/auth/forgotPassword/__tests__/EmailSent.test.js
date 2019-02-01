import React from 'react'
import renderer from 'react-test-renderer'

import EmailSent from '../EmailSent'

it('renders correctly', () => {
  const tree = renderer.create(<EmailSent />).toJSON()
  expect(tree).toMatchSnapshot()
})
