import pubsub from 'ds-pubsub'

export default () => {
  const events = new Map()

  const on = (name, fn) => {
    if (!events.has(name)) events.set(name, pubsub())

    return events.get(name).sub(fn)
  }

  const emit = (name, data) =>
    events.has(name) && events.get(name).pub(data)

  return Object.freeze({ on, emit })
}
