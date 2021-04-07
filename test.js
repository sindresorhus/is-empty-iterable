import test from 'ava';
import isEmptyIterable from './index.js';

test('main', t => {
	const iterable = {};
	iterable[Symbol.iterator] = function * () {
		yield 1;
	};

	const emptyIterable = {};
	emptyIterable[Symbol.iterator] = function * () {};

	t.true(isEmptyIterable(emptyIterable));
	t.true(isEmptyIterable([]));
	t.true(isEmptyIterable(new Set([])));
	t.false(isEmptyIterable(iterable));
	t.false(isEmptyIterable([1, 2]));
	t.false(isEmptyIterable(new Set([1, 2])));
});
