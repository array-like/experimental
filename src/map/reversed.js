
export function reversed ( iterable, out ) {

	var i;

	i = iterable.length;

	while ( i-- ) {
		out.push( iterable[i] );
	}

	return out;
}

