
test( "realloc" , function ( ) {

	var a , b , m , n ;

	m = 1000 ; n = 733 ;

	a = array.alloc( m ) ;
	b = array.alloc( n ) ;

	array.iota( a , 0 , m , 0 ) ;
	array.iota( b , 0 , n , 0 ) ;

	b = array.realloc( b , m ) ;
	array.iota( b , n , m , n ) ;

	deepEqual( b , a , "b is a after growing" ) ;

	a.splice( n , m - n ) ;
	b = array.realloc( b , n ) ;

	deepEqual( b , a , "b is a after shrinking" ) ;

} ) ;
