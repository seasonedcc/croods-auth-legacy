import React from 'react'
import renderer from 'react-test-renderer'

import CurrentUser from '../CurrentUser'

jest.mock('croods', () => ({
  Info: props => <div {...props}>Info</div>,
}))

const props = { foo: 'bar' }
const tree = renderer.create(<CurrentUser {...props} />)

it('renders correctly', () => {
  expect(tree.toJSON()).toMatchSnapshot()
})

it('parses response correctly', () => {
  const data = { important: true }
  const response = {
    foo: 'bar',
    data,
  }

  const parser = tree.root.findByProps({ name: 'currentUser' }).props
    .parseResponse
  expect(parser(response)).toMatchObject({ info: data })
})
