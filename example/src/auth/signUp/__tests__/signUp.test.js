import React from 'react'
import renderer from 'react-test-renderer'
import { New } from 'croods'

import SignUp from '../SignUp'

jest.mock('croods', () => ({
  New: props => (
    <div {...props}>
      New - {props.render(props)} - Created
      {props.renderCreated([{ email: 'foo' }])}
    </div>
  ),
}))

jest.mock('@reach/router', () => ({
  Redirect: props => <div {...props}>Redirect</div>,
}))

jest.mock('../Form', () => props => <div {...props}>Form</div>)

jest.mock('../../Created', () => props => <div {...props}>Created</div>)

const props = { setCurrentUser: jest.fn() }
const tree = renderer.create(<SignUp {...props} />)
const newComponent = tree.root.findByType(New)

it('renders correctly', () => {
  expect(tree.toJSON()).toMatchSnapshot()
})

describe('when no currentUser', () => {
  it('redirect', () => {
    const props = {
      user: 'foo',
      currentUser: { email: 'foo' },
      setCurrentUser: jest.fn(),
    }
    const tree = renderer.create(<SignUp {...props} />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})

describe('when parsing response', () => {
  it('parses response correctly', () => {
    const data = { importantData: { foo: 'bar' } }
    const response = { data, notImportantData: { bar: 'foo' } }

    const parser = newComponent.props.parseResponse

    expect(parser(response)).toMatchObject({ created: data })
  })
})
