import React from 'react'
import renderer from 'react-test-renderer'

import render from '../render'

jest.mock('../../../Loading', () => props => <div>Loading</div>)

describe('when there is no info', () => {
  it('calls render', () => {
    const props = {
      render: jest.fn(),
    }
    const currentUser = undefined
    const infoProps = {}

    renderer.create(render(props)(currentUser, infoProps))
    expect(props.render).toBeCalled()
  })
})

describe('when is fetching data', () => {
  it('calls render', () => {
    const props = {
      render: jest.fn(),
    }
    const currentUser = undefined
    const infoProps = { fetchingInfo: true }
    const tree = renderer.create(render(props)(currentUser, infoProps)).toJSON()

    expect(props.render).not.toBeCalled()
    expect(tree).toMatchSnapshot()
  })
})
