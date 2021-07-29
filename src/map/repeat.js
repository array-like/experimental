export function repeat(element, times, out) {
	let i;

	for (i = 0; i < times; ++i) {
		out.push(element);
	}

	return out;
}
