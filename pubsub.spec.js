/* eslint-env jest */
const pubsub = require('./pubsub')

describe('PubSub', () => {
  let events
  const callback = jest.fn()

  beforeEach(() => {
    events = pubsub()
    callback.mockClear()
  })

  it('works', () => {
    events.sub(callback)
    events.pub('foo')

    expect(callback).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenCalledWith('foo')
  })

  it('removes callback when it is unsubscibed', () => {
    const unSub = events.sub(callback)
    unSub()
    events.pub('foo')

    expect(callback).not.toHaveBeenCalled()
  })

  it('does not call a callback twice', () => {
    events.sub(callback)
    events.sub(callback)
    events.pub('foo')

    expect(callback).toHaveBeenCalledTimes(1)
    expect(callback).toHaveBeenCalledWith('foo')
  })
})
