

var fill = function ( a, i, j, v ) {

	for ( ; i < j ; ++i ) {
		a[i] = v;
	}

};

exports.fill = fill;
