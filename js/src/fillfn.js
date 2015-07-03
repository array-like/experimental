

var fillfn = function ( a , i , j , fn ) {

	for ( ; i < j ; ++i ) a[i] = fn( ) ;

} ;

exports.fillfn = fillfn ;
