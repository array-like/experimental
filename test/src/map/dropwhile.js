import test from 'ava';

import * as functools from '@functional-abstraction/functools';
import * as operator from '@functional-abstraction/operator';

import * as array from '#module';

test('dropwhile', (t) => {
	function one(iterable, predicate, expected) {
		t.deepEqual(
			array.dropwhile(predicate, iterable, []),
			expected,
			JSON.stringify([iterable, predicate]),
		);
	}

	one(
		array.range(0, 100, 1, []),
		functools.rpartial(operator.lt, [50]),
		array.range(50, 100, 1, []),
	);

	one(
		array.range(0, 100, 1, []),
		functools.rpartial(operator.lt, [100]),
		array.range(0, 0, 1, []),
	);

	one(
		array.range(0, 0, 1, []),
		functools.rpartial(operator.lt, [1]),
		array.range(0, 0, 1, []),
	);
});
