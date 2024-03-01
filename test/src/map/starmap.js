import test from 'ava';

import * as operator from '@functional-abstraction/operator';

import * as array from '#module';

test('starmap', (t) => {
	function one(callable, iterable, out) {
		const msg = 'starmap ' + JSON.stringify(iterable);
		t.deepEqual(array.starmap(callable, iterable, []), out, msg);
	}

	one(operator.mul, [], []);
	one(operator.mul, [[1, 1]], [1]);
	one(
		operator.mul,
		[
			[1, 1],
			[2, 2],
			[3, 3],
		],
		[1, 4, 9],
	);
	one(
		operator.mul,
		[
			[1, 1],
			[2, 2],
			[3, 3],
			[4, 4],
			[5, 5],
			[6, 6],
		],
		[1, 4, 9, 16, 25, 36],
	);
	one(
		operator.mul,
		[
			[1, 1],
			[2, 2],
			[3, 3],
			[4, 4],
			[5, 5],
			[6, 6],
			[7, 7],
			[8, 8],
			[9, 9],
		],
		[1, 4, 9, 16, 25, 36, 49, 64, 81],
	);
});
