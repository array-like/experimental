import {pick} from '../utils/pick.js';

import {repeat} from './repeat.js';

export function combinationswithrepetition(iterable, r, out) {
	// Combinationswithrepetition('ABC', 2) --> AA AB AC BB BC CC

	const pool = iterable;
	const len = pool.length;

	if (len === 0 && r > 0) {
		return out;
	}

	const indices = repeat(0, r, []);

	out.push(pick(pool, indices, []));

	for (;;) {
		let i = r - 1;
		let next;
		for (; i >= 0; --i) {
			if (indices[i] !== len - 1) {
				next = indices[i] + 1;
				break;
			}
		}

		if (i < 0) {
			return out;
		}

		for (; i < r; ++i) {
			indices[i] = next;
		}

		out.push(pick(pool, indices, []));
	}
}
