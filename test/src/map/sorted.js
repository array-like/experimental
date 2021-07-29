import util from 'node:util';
import test from 'ava';

import {increasing, decreasing} from '@total-order/primitive';

import {contains} from '@functional-abstraction/operator';

import {reduce} from '@array-like/reduce';

import {sorted} from '../../../src/index.js';

test('sorted', (t) => {
	function one(f, a) {
		const b = sorted(f, a);

		t.deepEqual(b.length, a.length, 'length check');

		const initializer = {};

		reduce(
			(x, y) => {
				if (x !== initializer) {
					t.true(f(x, y) <= 0, util.format('f( %f, %f ) <= 0', x, y));
				}

				t.true(contains(a, y), util.format('%f in %s', y, JSON.stringify(a)));

				return y;
			},
			b,
			initializer,
		);
	}

	for (const f of [increasing, decreasing]) {
		const a = [];

		const n = 100;

		let i = n;

		while (i--) {
			a.push(Math.random());
		}

		one(f, a);
	}
});
