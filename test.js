import test from 'ava';
import m from './';

test(t => {
	const iterable = {};
	iterable[Symbol.iterator] = function * () {
		yield 1;
	};

	const emptyIterable = {};
	emptyIterable[Symbol.iterator] = function * () {};

	t.true(m(emptyIterable));
	t.true(m([]));
	t.true(m(new Set([])));
	t.false(m(iterable));
	t.false(m([1, 2]));
	t.false(m(new Set([1, 2])));
});
