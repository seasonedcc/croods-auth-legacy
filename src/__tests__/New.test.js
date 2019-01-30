import React from 'react'
import renderer from 'react-test-renderer'

import New from '../New'

jest.mock('croods', () => ({
  New: props => (
    <div>
      New - {props.render(props)} - {props.renderCreated({ foo: 'bar' })}
    </div>
  ),
}))

jest.mock('../Created', () => props => (
  <div {...props}>Created - {props.renderCreated({ foo: 'bar' })}</div>
))

const props = {
  name: 'auth.Test',
  path: '/auth/test',
  render: jest.fn(() => null),
  renderCreated: jest.fn(() => null),
  foo: 'bar',
}

it('renders correctly', () => {
  const tree = renderer.create(<New {...props} />).toJSON()
  expect(props.render).toBeCalled()
  expect(props.renderCreated).toBeCalled()
  expect(tree).toMatchSnapshot()
})

describe('with different method', () => {
  const tree = renderer.create(<New {...props} method="put" />).toJSON()
  expect(props.render).toBeCalled()
  expect(props.renderCreated).toBeCalled()
  expect(tree).toMatchSnapshot()
})
