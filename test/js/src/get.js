
var random ;

random = require( "aureooms-js-random" ) ;

test( "get", function ( ) {

	var a , i , n ;

	n = 10 ;

	a = array.alloc( n ) ;

	array.iota( a , 0 , n , 0 ) ;

	random.shuffle( a , 0 , n ) ;

	for ( i = 0 ; i < n ; ++i ) {

		deepEqual( array.get( a , i ) , a[i] , i ) ;

	}

} ) ;
