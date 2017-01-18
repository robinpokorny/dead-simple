/* eslint-env jest */
import pubsub from './'

describe('PubSub', () => {
  it('works', () => {
    const events = pubsub()

    const one = jest.fn()
    events.sub(one)

    const two = jest.fn()
    events.sub(two)
    const unSubTwo = events.sub(two)

    events.pub('foo')

    expect(one).toHaveBeenCalledTimes(1)
    expect(one).toHaveBeenCalledWith('foo')
    expect(two).toHaveBeenCalledTimes(1)
    expect(two).toHaveBeenCalledWith('foo')

    one.mockClear()
    two.mockClear()

    unSubTwo()
    events.pub('bar')
    expect(one).toHaveBeenCalledTimes(1)
    expect(one).toHaveBeenCalledWith('bar')
    expect(two).not.toHaveBeenCalled()
  })
})
