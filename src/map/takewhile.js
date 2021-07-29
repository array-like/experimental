export function takewhile(predicate, iterable, out) {
	const n = iterable.length;

	if (n === 0) {
		return out;
	}

	let i = 0;
	let e = iterable[i];

	while (predicate(e)) {
		out.push(e);

		++i;

		if (i === n) {
			return out;
		}

		e = iterable[i];
	}

	return out;
}
