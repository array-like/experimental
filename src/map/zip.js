export function zip(iterables, out) {
	const len = iterables.length;

	if (len === 0) {
		return out;
	}

	let n = iterables[0].length;

	for (let i = 0; i < len; ++i) {
		const tmp = iterables[i].length;

		if (tmp < n) {
			n = tmp;
		}
	}

	for (let j = 0; j < n; ++j) {
		const tuple = [];

		for (let i = 0; i < len; ++i) {
			tuple.push(iterables[i][j]);
		}

		out.push(tuple);
	}

	return out;
}
