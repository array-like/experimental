

export function argmax ( compare, a, i, j ) {

	var k, key, tmp;

	if ( i >= j ) {
		return undefined;
	}

	k = i;
	key = a[k];

	for ( ++i ; i < j ; ++i ) {

		tmp = a[i];

		if ( compare( tmp, key ) > 0 ) {
			k = i;
			key = tmp;
		}

	}

	return k;
}

