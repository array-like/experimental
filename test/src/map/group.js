import test from 'ava';

import * as operator from '@functional-abstraction/operator';

import * as array from '#module';

test('group', (t) => {
	function one(key, iterable, expected) {
		t.deepEqual(
			array.group(key, iterable, []),
			expected,
			JSON.stringify([iterable, key]),
		);
	}

	one(operator.identity, '', []);

	one(operator.identity, 'AAAAAABBBBCCCCAABBCC', [
		['A', ['A', 'A', 'A', 'A', 'A', 'A']],
		['B', ['B', 'B', 'B', 'B']],
		['C', ['C', 'C', 'C', 'C']],
		['A', ['A', 'A']],
		['B', ['B', 'B']],
		['C', ['C', 'C']],
	]);

	one((item) => item.codePointAt(0) - 65, 'AAAAAABBBBCCCCAABBCC', [
		[0, ['A', 'A', 'A', 'A', 'A', 'A']],
		[1, ['B', 'B', 'B', 'B']],
		[2, ['C', 'C', 'C', 'C']],
		[0, ['A', 'A']],
		[1, ['B', 'B']],
		[2, ['C', 'C']],
	]);

	one(
		(item) => Math.floor((item.codePointAt(0) - 65) / 2),
		'AAAAAABBBBCCCCAABBCC',
		[
			[0, ['A', 'A', 'A', 'A', 'A', 'A', 'B', 'B', 'B', 'B']],
			[1, ['C', 'C', 'C', 'C']],
			[0, ['A', 'A', 'B', 'B']],
			[1, ['C', 'C']],
		],
	);
});
