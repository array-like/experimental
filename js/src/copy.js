

var copy = function ( a, ai, aj, b, bi ) {

	for ( ; ai < aj ; ++ai, ++bi ) {
		b[bi] = a[ai];
	}

};

exports.copy = copy;
