# Dead simple
*Dead simple (DS)* is a collection of small JavaScript modules

[![Build Status](https://img.shields.io/badge/build-passed-brightgreen.svg?style=flat-square)](https://semaphoreci.com/robinpokorny/dead-simple)
[![license](https://img.shields.io/npm/l/dead-simple.svg?style=flat-square)](https://github.com/robinpokorny/dead-simple/blob/master/LICENSE)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-lightgrey.svg?style=flat-square)](http://standardjs.com/)
[![Managed by Yarn](https://img.shields.io/badge/managed%20by-Yarn-2C8EBB.svg?style=flat-square)](https://yarnpkg.com/)

> Small readable almost-tweetable modules utilising classic patterns in modern language.


## DS-PubSub
Based on: https://gist.github.com/robinpokorny/d743ed9e0bc5214f79076a16c8e44a8f

### Features
* **Small:** 127 bytes. Gzipped: 127 bytes (Yes, you read that right)
* **No dependencies:**
* **Best practices:**
* **Readible:**
* **Efficient:**
* **Clean API:** `sub` and `pub`, need no more, can't go less.

### Browser compatibility

Chrome\* | Edge | FF | IE  | Opera | Safari | iOS
---------|------|----|-----|-------|--------|----
38       |   12 | 13 | -\* |    25 |    7.1 |   8

*Notes:*
 * Chrome includes mobile Chrome.
 * IE 11 does not support only arrow functions, they can be replaced with `function`. Also, [incomplete Set support](https://kangax.github.io/compat-table/es6/#test-Set_Set.prototype.add_returns_this) means the hand-minified version does not work.


## DS-EventEmitter
Based on: https://gist.github.com/robinpokorny/dd97bd013dc5198a5bd0556c591f661c

### Browser compatibility

Chrome\* | Edge | FF | IE  | Opera | Safari | iOS
---------|------|----|-----|-------|--------|----
38       |   12 | 13 | -\* |    25 |    7.1 |   8

*Notes:*
 * Chrome includes mobile Chrome.
 * IE 11 does not support only arrow functions, they can be replaced with `function`. See, [ds-pubsub](#ds-pubsub) for more compatibility info of that package.
