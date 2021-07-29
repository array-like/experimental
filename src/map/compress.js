export function compress(iterable, selector, out) {
	const j = Math.min(iterable.length, selector.length);

	for (let i = 0; i < j; ++i) {
		if (selector[i]) {
			out.push(iterable[i]);
		}
	}

	return out;
}
