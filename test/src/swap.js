import test from 'ava';
import * as array from '../../src';



import util from "util" ;
import * as mem from "@aureooms/js-memory" ;
import * as random from "@aureooms/js-random" ;
import operator from "@aureooms/js-operator" ;

function one (Constructor) {

	const calloc = mem._calloc(Constructor);

	test( `swap (${Constructor})`, t => {

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
				t.deepEqual( a[i], b[j], util.format( "a[%d] === b[%d]", i, j ) );
			}

			else {
				t.deepEqual( a[i], b[i], util.format( "a[%d] === b[%d]", i, i ) );
			}

		}

		array.swap( a , ai , aj ) ;

		t.deepEqual( a , b , "swap back" ) ;

		array.swap( a , ai , ai ) ;

		t.deepEqual( a , b , "swap" ) ;

	} ) ;

} ;

const arrays = [
	Array,
	Int8Array,
	Int16Array,
	Int32Array,
	Uint8Array,
	Uint16Array,
	Uint32Array,
	Uint8ClampedArray,
	Float32Array,
	Float64Array,
];

arrays.forEach( function ( Constructor ) {

	one( Constructor );

});
