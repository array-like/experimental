import test from 'ava';

import {alloc} from '@array-like/alloc';
import {iota} from '@array-like/fill';

import {splice} from '#module';

test('splice', (t) => {
	const m = 3;
	const n = m + m;

	const a = alloc(m);
	const b = new Uint8Array(m);
	const c = alloc(n);

	iota(a, 0, m, m);
	iota(b, 0, m, 0);
	iota(c, 0, m, 0);
	iota(c, m, n, m);

	splice(a, undefined, undefined, b, 0);

	t.deepEqual(a, c, 'undefined, undefined');

	splice(a, undefined, b.length, []);

	t.deepEqual(a.length, m, 'check length');

	splice(a, 0, 0, b, 0);

	t.deepEqual(a, c, '0, 0');

	splice(a, undefined, b.length, []);

	t.deepEqual(a.length, m, 'check length');

	splice(a, -a.length, -a.length, b, 0);

	t.deepEqual(a, c, '-a.length, -a.length');

	splice(a, undefined, b.length, []);

	t.deepEqual(a.length, m, 'check length');
});
