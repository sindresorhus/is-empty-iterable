export default function isEmptyIterable(iterable) {
	for (const _ of iterable) { // eslint-disable-line no-unused-vars, no-unreachable-loop
		return false;
	}

	return true;
}
