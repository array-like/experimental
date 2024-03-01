import {pick} from '../utils/pick.js';
import {range} from '../utils/range.js';

export function permutations(iterable, repeat, out) {
	// Permutations('ABCD', 2) --> AB AC AD BA BC BD CA CB CD DA DB DC
	// permutations(range(3), 3) --> 012 021 102 120 201 210

	const pool = iterable;
	const len = pool.length;

	if (repeat > len) {
		return out;
	}

	const indices = range(0, len, 1, []);
	const cycles = range(len, len - repeat, -1, []);

	out.push(pick(pool, indices.slice(0, repeat), []));

	if (repeat === 0 || len === 0) {
		return out;
	}

	for (;;) {
		let i = repeat;

		while (i--) {
			--cycles[i];

			if (cycles[i] === 0) {
				const x = indices[i];

				indices.splice(i, 1);
				indices.push(x);

				cycles[i] = len - i;
			} else {
				const j = cycles[i];

				const tmp = indices[i];
				indices[i] = indices[len - j];
				indices[len - j] = tmp;

				out.push(pick(pool, indices.slice(0, repeat), []));
				break;
			}
		}

		if (i === -1) {
			return out;
		}
	}
}
