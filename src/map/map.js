/**
 *
 * Maps a callable object over an array.
 *
 * /!\ currently only supports a (function, array) tuple as argument
 *
 */

export function map(callable, iterable, out) {
	const len = iterable.length;

	for (let i = 0; i < len; ++i) {
		out.push(callable(iterable[i]));
	}

	return out;
}
