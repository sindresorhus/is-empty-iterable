# is-empty-iterable [![Build Status](https://travis-ci.org/sindresorhus/is-empty-iterable.svg?branch=master)](https://travis-ci.org/sindresorhus/is-empty-iterable)

> Check if an `Iterable` is empty

More efficient than `Array.from(iterable).length`, as it only iterates the first item, which can make a big difference for dynamic iterators, like a `Generator` doing an expensive operation.


## Install

```
$ npm install is-empty-iterable
```


## Usage

```js
const isEmptyIterable = require('is-empty-iterable');

isEmptyIterable([]);
//=> true

isEmptyIterable(new Set([1, 2]));
//=> false
```


## API

### isEmptyIterable(iterable)

Returns a `boolean`.

#### iterable

Type: `Iterable`


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
