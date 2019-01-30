import React from 'react'
import renderer from 'react-test-renderer'

import CurrentUser from '../CurrentUser'

jest.mock('croods', () => ({
  Info: props => <div {...props}>{props.render(props)}</div>,
}))

jest.mock('../render', () => props => info => (
  <div {...props} {...info}>
    renderInfo
  </div>
))

const props = { foo: 'bar', reducer: 'auth' }
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

  const parser = tree.root.findByProps({ name: 'auth.currentUser' }).props
    .parseResponse
  expect(parser(response)).toMatchObject({ info: data })
})
