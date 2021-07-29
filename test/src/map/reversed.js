import test from 'ava';
import * as array from '../../../src/index.js';

test('reversed', (t) => {
	const one = function (iterable, out) {
		const msg = 'reversed ' + JSON.stringify(iterable);

		t.deepEqual(array.reversed(iterable, []), out, msg);

		t.deepEqual(array.reversed(out, []), iterable, 'un' + msg);
	};

	one([], []);
	one([1], [1]);
	one([1, 2, 3], [3, 2, 1]);
	one([1, 2, 3, 4, 5, 6], [6, 5, 4, 3, 2, 1]);
	one([1, 2, 3, 4, 5, 6, 7, 8, 9], [9, 8, 7, 6, 5, 4, 3, 2, 1]);
});
