export function dropwhile(predicate, iterable, out) {
	const n = iterable.length;

	if (n === 0) {
		return out;
	}

	let i = 0;
	let e = iterable[i];

	while (predicate(e)) {
		++i;

		if (i === n) {
			return out;
		}

		e = iterable[i];
	}

	out.push(e);

	for (++i; i < n; ++i) {
		out.push(iterable[i]);
	}

	return out;
}
