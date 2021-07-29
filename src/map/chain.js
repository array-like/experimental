export function chain(iterables, out) {
	const len = iterables.length;

	if (len === 0) {
		return out;
	}

	for (let i = 0; i < len; ++i) {
		const it = iterables[i];
		const n = it.length;

		for (let j = 0; j < n; ++j) {
			out.push(it[j]);
		}
	}

	return out;
}
