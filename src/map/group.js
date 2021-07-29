export function group(key, iterable, out) {
	const len = iterable.length;

	if (len === 0) {
		return out;
	}

	let i = 0;
	let item = iterable[i];
	let next = key(item);

	do {
		const curr = next;
		const items = [item];
		const tuple = [curr, items];

		++i;

		while (i < len) {
			item = iterable[i];
			next = key(item);

			if (next !== curr) {
				break;
			}

			items.push(item);
			++i;
		}

		out.push(tuple);
	} while (i < len);

	return out;
}
