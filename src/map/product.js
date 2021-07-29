export function product(iterables, repeat, out) {
	// Product(['ABCD', 'xy'], 1) --> Ax Ay Bx By Cx Cy Dx Dy
	// product([range(0, 2, 1)], 3) --> 000 001 010 011 100 101 110 111

	let a;
	let b;
	let i;
	let j;
	let k;
	let m;
	let n;
	let iterable;
	let c;
	let len;

	a = [[]];

	// Repeat k times

	for (k = 0; k < repeat; ++k) {
		// For each iterable
		// concatenate existing combinaisons
		// with every element of this iterable

		for (i = 0, m = iterables.length; i < m; ++i) {
			// B will contain the newly created combinaisons

			b = [];

			// Cache the current iterable

			iterable = iterables[i];

			// For each existing combinaison

			for (j = 0, n = a.length; j < n; ++j) {
				// For each element of the current iterable

				for (c = 0, len = iterable.length; c < len; ++c) {
					// Concatenate existing combinaison with
					// current element of the iterable

					b.push(a[j].concat(iterable[c]));
				}
			}

			// Update a for next round

			a = b;
		}
	}

	// Report output

	for (j = 0, n = a.length; j < n; ++j) {
		out.push(a[j]);
	}

	return out;
}
