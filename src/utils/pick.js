export function pick(array, indices, out) {
	const len = indices.length;

	for (let i = 0; i < len; ++i) {
		const k = indices[i];
		out.push(array[k]);
	}

	return out;
}
