'use strict';
module.exports = iterable => {
	for (const _ of iterable) { // eslint-disable-line no-unused-vars
		return false;
	}

	return true;
};
