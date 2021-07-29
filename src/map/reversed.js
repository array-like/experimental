export function reversed(iterable, out) {
	let i;

	i = iterable.length;

	while (i--) {
		out.push(iterable[i]);
	}

	return out;
}
