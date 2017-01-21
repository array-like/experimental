
export function filter ( predicate, iterable, out ) {

	const len = iterable.length;

	for ( let i = 0 ; i < len ; ++i ) {

		const item = iterable[i];

		if ( predicate( item ) ) {
			out.push( item );
		}

	}

	return out;

}

