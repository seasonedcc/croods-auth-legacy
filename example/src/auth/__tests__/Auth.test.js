import React from 'react'
import renderer from 'react-test-renderer'
import Auth from '../Auth'

jest.mock('../currentUser/CurrentUser', () => ({ render }) =>
  render({}, { actions: {} }),
)

it('renders correctly', () => {
  const render = () => <div>Auth</div>

  const tree = renderer.create(<Auth render={render} />).toJSON()
  expect(tree).toMatchSnapshot()
})
