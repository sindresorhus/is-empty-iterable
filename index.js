'use strict';
module.exports = iterable => {
	return iterable.next().done;
};
