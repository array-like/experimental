import {range} from '../utils/range.js';
import {pick} from '../utils/pick.js';

export function combinations(iterable, repeat, out) {
	// Combinations('ABCD', 2) --> AB AC AD BC BD CD
	// combinations(range(4), 3) --> 012 013 023 123

	const pool = iterable;
	const len = pool.length;

	if (repeat > len) {
		return out;
	}

	const indices = range(0, repeat, 1, []);

	out.push(pick(pool, indices, []));

	if (repeat === 0 || len === 0) {
		return out;
	}

	for (;;) {
		let i = repeat - 1;
		for (; i >= 0; --i) {
			if (indices[i] !== i + len - repeat) {
				break;
			}
		}

		if (i < 0) {
			return out;
		}

		++indices[i];

		for (let j = i + 1; j < repeat; ++j) {
			indices[j] = indices[j - 1] + 1;
		}

		out.push(pick(pool, indices, []));
	}
}
