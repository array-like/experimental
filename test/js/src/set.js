var random ;

random = require( "aureooms-js-random" ) ;

test( "set", function ( ) {

	var a , b , i , n ;

	n = 10 ;

	a = array.alloc( n ) ;

	array.iota( a , 0 , n , 0 ) ;

	random.shuffle( a , 0 , n ) ;

	b = array.alloc( n ) ;

	for ( i = 0 ; i < n ; ++i ) {

		array.set( b , i , a[i] ) ;

	}

	for ( i = 0 ; i < n ; ++i ) {

		deepEqual( b[i] , a[i] , i ) ;

	}

} ) ;
