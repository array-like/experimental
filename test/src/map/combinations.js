import test from 'ava';
import * as array from '../../../src/index.js';

test('combinations', (t) => {
	function one(iterable, repeat, expected) {
		t.deepEqual(
			array.combinations(iterable, repeat, []),
			expected,
			JSON.stringify([iterable, repeat]),
		);
	}

	one('ABCD', 2, [
		['A', 'B'],
		['A', 'C'],
		['A', 'D'],
		['B', 'C'],
		['B', 'D'],
		['C', 'D'],
	]);
	one(array.range(0, 4, 1, []), 3, [
		[0, 1, 2],
		[0, 1, 3],
		[0, 2, 3],
		[1, 2, 3],
	]);
	one(array.range(0, 4, 1, []), 4, [[0, 1, 2, 3]]);
	one(array.range(0, 4, 1, []), 5, []);
	one(array.range(0, 4, 1, []), 0, [[]]);
	one(array.range(0, 0, 1, []), 0, [[]]);
	one(array.range(0, 0, 1, []), 1, []);
});
