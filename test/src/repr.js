import test from 'ava';

import {alloc} from '@array-like/alloc';
import {iota} from '@array-like/fill';

import {repr} from '#module';

test('repr', (t) => {
	const n = 10;

	const a = alloc(n);
	const b = new Uint8Array(n);

	iota(a, 0, n, 0);
	iota(b, 0, n, 0);

	t.is(repr(b, 0, n), JSON.stringify(a));
});
