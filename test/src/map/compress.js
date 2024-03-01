import test from 'ava';
import * as array from '#module';

test('compress', (t) => {
	function one(iterable, selector, expected) {
		t.deepEqual(
			array.compress(iterable, selector, []),
			expected,
			JSON.stringify([iterable, selector]),
		);
	}

	one('ABC', [0, 0, 0], []);
	one('ABC', [0, 0, 1], ['C']);
	one('ABC', [0, 1, 0], ['B']);
	one('ABC', [0, 1, 1], ['B', 'C']);
	one('ABC', [1, 0, 0], ['A']);
	one('ABC', [1, 0, 1], ['A', 'C']);
	one('ABC', [1, 1, 0], ['A', 'B']);
	one('ABC', [1, 1, 1], ['A', 'B', 'C']);

	one([0, 1, 2], [0, 0, 0], []);
	one([0, 1, 2], [0, 0, 1], [2]);
	one([0, 1, 2], [0, 1, 0], [1]);
	one([0, 1, 2], [0, 1, 1], [1, 2]);
	one([0, 1, 2], [1, 0, 0], [0]);
	one([0, 1, 2], [1, 0, 1], [0, 2]);
	one([0, 1, 2], [1, 1, 0], [0, 1]);
	one([0, 1, 2], [1, 1, 1], [0, 1, 2]);
});
