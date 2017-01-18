# :skull::bulb: Dead simple PubSub and EventEmitter
> Small readable almost-tweetable modules utilising classic patterns in modern language.

[![Build Status](https://img.shields.io/badge/build-passed-brightgreen.svg?style=flat-square)](https://semaphoreci.com/robinpokorny/dead-simple)
[![license](https://img.shields.io/npm/l/dead-simple.svg?style=flat-square)](https://github.com/robinpokorny/dead-simple/blob/master/LICENSE)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-lightgrey.svg?style=flat-square)](http://standardjs.com/)
[![Managed by Yarn](https://img.shields.io/badge/managed%20by-Yarn-2C8EBB.svg?style=flat-square)](https://yarnpkg.com/)

### Features
* **Small:** PubSub: 127 bytes, EventEmitter: 138 bytes, **together: 191 bytes** (all gzipped)
* **Best practices:** Subscribe returns unsubscribe. So you can use anonymous functions.
* **Readible:** There is nothing magical in the code; except the simplicity.
* **Modern:** Uses new, yet [well-supported](#browser-compatibility) features.
* **Efficient:** No memory-leaks, no duplicate calls, no extra looping.
* **Clean API:** `sub` and `pub` (or `on` and `emit`), need no more, can't go less.
* **Modular:** Use only what you need.

## DS-PubSub

## DS-EventEmitter

---

### Browser compatibility

Used ES6: [const](http://kangax.github.io/compat-table/es6/#test-const),
[arrow functions](http://kangax.github.io/compat-table/es6/#test-arrow_functions),
[Map](http://kangax.github.io/compat-table/es6/#test-Map),
[Set](http://kangax.github.io/compat-table/es6/#test-Set),
[object shorthand](http://kangax.github.io/compat-table/es6/#test-object_literal_extensions_shorthand_properties)

Chrome\* | Edge | FF | IE  | Opera | Safari | iOS | Node
---------|------|----|-----|-------|--------|-----|-----
38       |   12 | 13 | -\* |    25 |    7.1 |   8 |    4

*Notes:*
 * Chrome includes mobile Chrome (Android 4+).
 * IE 11 does not support only arrow functions and object shorthand. This is a small fix.
 * The module needs to bundled, of course.

### Super small versions
This project started a [pair](https://gist.github.com/robinpokorny/d743ed9e0bc5214f79076a16c8e44a8f) of [gists](https://gist.github.com/robinpokorny/dd97bd013dc5198a5bd0556c591f661c) which included a hand minified version, too.

We were able to get down to **91B** for PubSub: 
```js
export default (s=new Set)=>({pub:d=>s.forEach(f=>f(d)),sub:f=>s.add(f).delete.bind(s,f)})
```

And **139B** for EventEmitter (`p` is PubSub):
```js
export default e=>(e=new Map, Object.freeze({on:(n,f)=>(e.has(name)||e.set(n,p()),e.get(n).sub(f)),emit:(n,d)=>e.has(n)&&e.get(n).pub(d)}))
```

These versions are for fun, more like a proof of concept and may not work in some browsers.
