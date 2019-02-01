import React from 'react'
import renderer from 'react-test-renderer'
import { New } from 'croods'
import { navigate } from '@reach/router'

import ResetPassword from '../ResetPassword'

jest.mock('croods', () => ({
  New: props => <div {...props}>New - {props.render(props)}</div>,
}))
jest.mock('../Form', () => props => <div {...props}>Form</div>)

jest.mock('@reach/router', () => ({
  navigate: jest.fn(),
}))

const tree = renderer.create(<ResetPassword />)

it('renders correctly', () => {
  expect(tree.toJSON()).toMatchSnapshot()
})

describe('renderCreated', () => {
  const newObject = tree.root.findByType(New)
  it('calls navigate', () => {
    newObject.props.renderCreated()
    expect(navigate).toBeCalled()
  })
})
