



var __opt__ = function ( pred ) {

	var opt = function ( a, i, j ) {

		var arg, tmp;

		if ( i >= j ) {
			return undefined;
		}

		arg = a[i];

		for ( ++i ; i < j ; ++i ) {

			tmp = a[i];

			if ( pred( tmp, arg ) ) {
				arg = tmp;
			}

		}

		return arg;
	};

	return opt;

};


exports.__opt__ = __opt__;
