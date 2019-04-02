declare const isEmptyIterable: {
	/**
	Check if an `Iterable` is empty.

	@example
	```
	import isEmptyIterable = require('is-empty-iterable');

	isEmptyIterable([]);
	//=> true

	isEmptyIterable(new Set([1, 2]));
	//=> false
	```
	*/
	(iterable: Iterable<unknown>): boolean;

	// TODO: Remove this for the next major release, refactor the whole definition to:
	// declare function isEmptyIterable(iterable: Iterable<unknown>): boolean;
	// export = isEmptyIterable;
	default: typeof isEmptyIterable;
};

export = isEmptyIterable;
