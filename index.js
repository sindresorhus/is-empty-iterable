'use strict';

const isEmptyIterable = iterable => {
	for (const _ of iterable) { // eslint-disable-line no-unused-vars
		return false;
	}

	return true;
};

module.exports = isEmptyIterable;
module.exports.default = isEmptyIterable;
