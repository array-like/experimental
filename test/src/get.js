import test from 'ava';

import {alloc} from '@array-like/alloc';
import {iota} from '@array-like/fill';

import {shuffle} from '@randomized/random';

import {get} from '#module';

test('get', (t) => {
	const n = 10;

	const a = alloc(n);

	iota(a, 0, n, 0);

	shuffle(a, 0, n);

	for (let i = 0; i < n; ++i) {
		t.is(get(a, i), a[i], `${i}`);
	}
});
