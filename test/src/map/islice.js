import test from 'ava';

import * as array from '#module';

test('islice', (t) => {
	function one(start, stop, step) {
		const iterable = array.range(0, stop, 1, []);

		t.deepEqual(
			array.islice(iterable, start, stop, step, []),
			array.range(start, stop, step, []),
			JSON.stringify([start, stop, step]),
		);
	}

	one(0, 0, 1);
	one(0, 100, 1);
	one(0, 100, 2);
	one(0, 100, 3);
	one(50, 100, 1);
	one(50, 100, 2);
	one(50, 100, 3);
});
