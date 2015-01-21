

var one , util , mem , random , operator ;

util = require( "util" ) ;
mem = require( "aureooms-js-mem" ) ;
random = require( "aureooms-js-random" ) ;
operator = require( "aureooms-js-operator" ) ;

one = function ( calloc ) {

	test( util.format( "swap (%s)" , calloc ) , function ( ) {

		var a , b , i , j , n , ai , aj ;

		n = 100 ;
		ai = 23 ;
		aj = 73 ;

		a = calloc( n ) ;
		b = calloc( n ) ;

		for ( i = 0 ; i < n ; ++i ) {
			a[i] = random.randint( 1 , operator.pow( 2 , 31 ) ) ;
			b[i] = a[i] ;
		}

		array.swap( a , ai , aj ) ;

		for ( i = 0 ; i < n ; ++i ) {

			if ( i === ai ||  i === aj ) {
				j = ai + aj - i ;
				deepEqual( a[i], b[j], util.format( "a[%d] === b[%d]", i, j ) );
			}

			else {
				deepEqual( a[i], b[i], util.format( "a[%d] === b[%d]", i, i ) );
			}

		}

		array.swap( a , ai , aj ) ;

		deepEqual( a , b , "swap back" ) ;

		array.swap( a , ai , ai ) ;

		deepEqual( a , b , "swap" ) ;

	} ) ;

} ;

allocators = [
	mem.__calloc__(Array) ,
	mem.__calloc__(Int8Array) ,
	mem.__calloc__(Int16Array) ,
	mem.__calloc__(Int32Array) ,
	mem.__calloc__(Uint8Array) ,
	mem.__calloc__(Uint16Array) ,
	mem.__calloc__(Uint32Array) ,
	mem.__calloc__(Uint8ClampedArray) ,
	mem.__calloc__(Float32Array) ,
	mem.__calloc__(Float64Array)
] ;

allocators.forEach( function ( calloc ) {

	one( calloc ) ;

} ) ;

