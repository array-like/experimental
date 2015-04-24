
var reverse = function ( a , i , j ) {

	while ( i < j ) swap( a , i++ , --j ) ;

} ;

exports.reverse = reverse ;
