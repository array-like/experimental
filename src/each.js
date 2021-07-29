export function each(callback, array, left, right) {
	for (; left < right; ++left) {
		callback(array[left], left, array);
	}
}
