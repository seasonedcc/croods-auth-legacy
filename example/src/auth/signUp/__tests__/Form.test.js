import React from 'react'
import renderer from 'react-test-renderer'

import Form from '../Form'

jest.mock('redux-form', () => ({
  reduxForm: () => Component => Component,
}))

jest.mock('../../../form/TextField', () => props => (
  <div {...props}>TextField - </div>
))

jest.mock('../../Form', () => props => (
  <div {...props}>Form - {props.children}</div>
))

it('renders correctly', () => {
  const props = { handleSubmit: jest.fn() }
  const tree = renderer.create(<Form {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})

describe('with errors', () => {
  it('renders correctly', () => {
    const props = {
      handleSubmit: jest.fn(),
      creating: false,
      error: 'foo-error',
    }
    const tree = renderer.create(<Form {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
