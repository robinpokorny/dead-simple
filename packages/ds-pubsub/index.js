export default () => {
  const subscribers = new Set()

  const sub = (fn) => {
    subscribers.add(fn)

    return () => subscribers.delete(fn)
  }

  const pub = (data) => subscribers.forEach((fn) => fn(data))

  return Object.freeze({ pub, sub })
}
