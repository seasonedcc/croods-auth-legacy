import React from 'react'
import renderer from 'react-test-renderer'
import render from '../render'

jest.mock('../Destroyed', () => props => <div {...props}> Destroyed</div>)

it('renders correctly', () => {
  const tree = renderer.create(render({ render: jest.fn() })(null, {})).toJSON()
  expect(tree).toMatchSnapshot()
})

describe('while destroying', () => {
  const props = {
    render: jest.fn(),
  }

  it('renders correctly', () => {
    renderer.create(render(props)(null, { destroying: true }))
    expect(props.render).toBeCalled()
  })
})

describe('when destroyed', () => {
  it('renders correctly', () => {
    const props = { setCurrentUser: jest.fn(), render: jest.fn() }
    const tree = renderer
      .create(render(props)(null, { destroyed: {} }))
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})
