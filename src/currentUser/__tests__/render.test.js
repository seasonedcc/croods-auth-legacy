import renderer from 'react-test-renderer'

import render from '../render'

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
  it('calls renderLoading', () => {
    const props = {
      render: jest.fn(),
      renderLoading: jest.fn(),
    }
    const currentUser = undefined
    const infoProps = { fetchingInfo: true }
    renderer.create(render(props)(currentUser, infoProps)).toJSON()

    expect(props.render).not.toBeCalled()
    expect(props.renderLoading).toBeCalled()
  })
})
