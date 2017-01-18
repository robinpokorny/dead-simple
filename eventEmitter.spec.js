/* eslint-env jest */
const eventEmitter = require('./eventEmitter')

describe('Event Emitter', () => {
  let emitter
  const callback1 = jest.fn()
  const callback2 = jest.fn()

  beforeEach(() => {
    emitter = eventEmitter()
    callback1.mockClear()
    callback2.mockClear()
  })

  it('has simple API', () => {
    const keys = Object.keys(emitter).sort().join()
    expect(keys).toBe('emit,on')
  })

  it('passes data to registered callbacks', () => {
    emitter.on('event', callback1)
    emitter.on('click', callback2)

    emitter.emit('event', 'foo')
    emitter.emit('click', 'bar')

    expect(callback1).toHaveBeenCalledTimes(1)
    expect(callback1).toHaveBeenCalledWith('foo')
    expect(callback2).toHaveBeenCalledTimes(1)
    expect(callback2).toHaveBeenCalledWith('bar')
  })

  it('removes callback when it is unsubscibed', () => {
    const unSub = emitter.on('event', callback1)
    unSub()
    emitter.emit('event', 'foo')

    expect(callback1).not.toHaveBeenCalled()
  })

  it('does not call a callback twice', () => {
    emitter.on('event', callback1)
    emitter.on('event', callback1)
    emitter.emit('event', 'foo')

    expect(callback1).toHaveBeenCalledTimes(1)
    expect(callback1).toHaveBeenCalledWith('foo')
  })

  it('does not leak on sucessfull emit', () => {
    emitter.on('event', callback1)
    const result = emitter.emit('event', 'foo')

    expect(result).toBeUndefined()
  })

  it('returns false on empty emit', () => {
    const result = emitter.emit('event', 'foo')

    expect(result).toBe(false)
  })
})
