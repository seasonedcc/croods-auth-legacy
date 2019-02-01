import React from 'react'
import renderer from 'react-test-renderer'
import { New as CroodsNew } from 'croods'

import New from '../New'

jest.mock('croods', () => ({
  New: props => (
    <div {...props}>
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

const tree = renderer.create(<New {...props} />)

it('renders correctly', () => {
  expect(props.render).toBeCalled()
  expect(props.renderCreated).toBeCalled()
  expect(tree.toJSON()).toMatchSnapshot()
})

it('parses correctly', () => {
  const data = { important: true }
  const response = {
    foo: 'bar',
    data,
  }

  const parser = tree.root.findByType(CroodsNew).props.parseResponse
  expect(parser(response)).toMatchObject({ created: data })
})

describe('with different method', () => {
  const tree = renderer
    .create(<New {...props} method="put" defaultParse />)
    .toJSON()
  expect(props.render).toBeCalled()
  expect(props.renderCreated).toBeCalled()
  expect(tree).toMatchSnapshot()
})
