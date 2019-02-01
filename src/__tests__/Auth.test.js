import React from 'react'
import renderer from 'react-test-renderer'

import Auth from '../Auth'

jest.mock('croods', () => ({
  Options: ({ render, ...props }) => (
    <div {...props}>Options - {render(props)}</div>
  ),
}))

jest.mock('../currentUser/CurrentUser', () => ({ render, ...props }) => (
  <div {...props}>
    CurrentUser -{' '}
    {render(props, { actions: { setInfo: { setCurrentUser: jest.fn() } } })}
  </div>
))

it('renders correctly', () => {
  const props = {
    render: jest.fn(() => <div>render</div>),
    renderLoading: jest.fn(() => <div>renderLoading</div>),
  }
  const tree = renderer.create(<Auth {...props} />).toJSON()
  expect(tree).toMatchSnapshot()
})
