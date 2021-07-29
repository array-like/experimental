export function tee(iterable, n, out) {
	const m = iterable.length;

	while (n--) {
		const deque = [];

		for (let i = 0; i < m; ++i) {
			deque.push(iterable[i]);
		}

		out.push(deque);
	}

	return out;
}
