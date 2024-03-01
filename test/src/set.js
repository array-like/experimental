import test from 'ava';

import {alloc} from '@array-like/alloc';
import {iota} from '@array-like/fill';

import {shuffle} from '@randomized/random';

import {set} from '#module';

test('set', (t) => {
	const n = 10;

	const a = alloc(n);

	iota(a, 0, n, 0);

	shuffle(a, 0, n);

	const b = alloc(n);

	for (let i = 0; i < n; ++i) {
		set(b, i, a[i]);
	}

	for (let i = 0; i < n; ++i) {
		t.deepEqual(b[i], a[i], `${i}`);
	}
});
