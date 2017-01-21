
/**
 *
 * Maps a callable object over an array.
 *
 * /!\ currently only supports a (function, array) tuple as argument
 *
 */

export function starmap ( callable, iterable, out ) {

	var i, len;

	len = iterable.length;

	for ( i = 0 ; i < len ; ++i ) {
		out.push( callable.apply( null, iterable[i] ) );
	}

	return out;

}

