import test from 'ava';
import * as array from '#module';

test('product', (t) => {
	function one(iterables, repeat, expected) {
		t.deepEqual(
			array.product(iterables, repeat, []),
			expected,
			JSON.stringify([iterables, repeat]),
		);
	}

	one(['ABCD', 'xy'], 1, [
		['A', 'x'],
		['A', 'y'],
		['B', 'x'],
		['B', 'y'],
		['C', 'x'],
		['C', 'y'],
		['D', 'x'],
		['D', 'y'],
	]);

	one([[0, 1]], 3, [
		[0, 0, 0],
		[0, 0, 1],
		[0, 1, 0],
		[0, 1, 1],
		[1, 0, 0],
		[1, 0, 1],
		[1, 1, 0],
		[1, 1, 1],
	]);
});
