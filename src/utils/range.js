

export function range ( start, stop, step, out ) {

	if ( step < 0 ) {
		for ( ; start > stop ; start += step ) {
			out.push( start );
		}
	}

	else {
		for ( ; start < stop ; start += step ) {
			out.push( start );
		}
	}

	return out;

}

