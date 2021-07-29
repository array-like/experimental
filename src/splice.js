import {slice} from './slice.js';

export function splice(a, ai, aj, b, bi, bj) {
	if (ai === undefined) {
		ai = 0;
	} else if (ai < 0) {
		ai += a.length;
	}

	if (aj === undefined) {
		aj = ai;
	} else if (aj < 0) {
		aj += a.length;
	}

	return Array.prototype.splice.apply(
		a,
		[ai, aj - ai].concat(slice(b, bi, bj)),
	);
}
