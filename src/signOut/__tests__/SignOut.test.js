import React from 'react'
import renderer from 'react-test-renderer'
import SignOut from '../SignOut'

jest.mock('croods', () => ({
  Destroy: props => <div {...props}>Destroy - {props.render(props)}</div>,
}))

jest.mock('../render', () => props => destroy => (
  <div {...props} destroy={destroy}>
    renderDestroy
  </div>
))

const props = { foo: 'bar' }
const tree = renderer.create(<SignOut {...props} />)

it('renders correctly', () => {
  expect(tree.toJSON()).toMatchSnapshot()
})

it('parses response correctly', () => {
  const data = { important: true }
  const response = {
    foo: 'bar',
    data,
  }

  const parser = tree.root.findByProps({ name: 'auth.signOut' }).props
    .parseDestroyResponse
  expect(parser(response)).toMatchObject({ destroyed: { id: 'currentUser' } })
})
