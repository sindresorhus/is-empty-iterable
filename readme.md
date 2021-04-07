# is-empty-iterable

> Check if an `Iterable` is empty

More efficient than `Array.from(iterable).length`, as it only iterates the first item, which can make a big difference for dynamic iterators, like a `Generator` doing an expensive operation.

## Install

```
$ npm install is-empty-iterable
```

## Usage

```js
import isEmptyIterable from 'is-empty-iterable';

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
