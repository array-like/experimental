

var swapranges = function ( a , ai , aj , b , bi ) {

	var tmp ;

	for ( ; ai < aj ; ++ai , ++bi ) {

		tmp   = a[ai] ;
		a[ai] = b[bi] ;
		b[bi] = tmp ;

	}

} ;

exports.swapranges = swapranges ;
