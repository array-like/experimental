

var min = function ( compare, a, i, j ) {

	var key, tmp;

	if ( i >= j ) {
		return undefined;
	}

	key = a[i];

	for ( ++i ; i < j ; ++i ) {

		tmp = a[i];

		if ( compare( tmp, key ) < 0 ) {
			key = tmp;
		}

	}

	return key;
};

exports.min = min;
