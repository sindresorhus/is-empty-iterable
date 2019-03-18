/**
Check if an `Iterable` is empty.

@example
```
import isEmptyIterable from 'is-empty-iterable';

isEmptyIterable([]);
//=> true

isEmptyIterable(new Set([1, 2]));
//=> false
```
*/
export default function isEmptyIterable(iterable: Iterable<unknown>): boolean;
