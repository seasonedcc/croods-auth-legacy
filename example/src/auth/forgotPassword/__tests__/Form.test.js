import React from 'react'
import renderer from 'react-test-renderer'

import Form from '../Form'

jest.mock('redux-form', () => ({
  reduxForm: () => Component => Component,
}))

jest.mock('../../../form/TextField', () => props => (
  <div {...props}>TextField - </div>
))

it('renders correctly', () => {
  const props = {
    creating: false,
    handleSubmit: jest.fn(),
  }

  const tree = renderer.create(<Form {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})

describe('with error', () => {
  it('renders correctly', () => {
    const props = {
      creating: false,
      form: { values: {}, errors: {} },
      createError: 'Email inválido',
      handleSubmit: jest.fn(),
    }

    const tree = renderer.create(<Form {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('while submitting', () => {
  it('renders correctly', () => {
    const props = {
      creating: true,
      handleSubmit: jest.fn(),
    }

    const tree = renderer.create(<Form {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
