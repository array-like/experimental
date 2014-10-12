

var iota = function ( a, i, j, v ) {

	for ( ; i < j ; ++i, ++v ){
		a[i] = v;
	}

};

exports.iota = iota;
