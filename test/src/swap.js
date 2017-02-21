import test from 'ava';
import * as array from '../../src';



import util from "util" ;
import * as mem from "@aureooms/js-memory" ;
import * as random from "@aureooms/js-random" ;
import operator from "@aureooms/js-operator" ;

function one ( calloc ) {

test( util.format( "swap (%s)" , calloc ) , t => {

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

const allocators = [
	mem._calloc(Array) ,
	mem._calloc(Int8Array) ,
	mem._calloc(Int16Array) ,
	mem._calloc(Int32Array) ,
	mem._calloc(Uint8Array) ,
	mem._calloc(Uint16Array) ,
	mem._calloc(Uint32Array) ,
	mem._calloc(Uint8ClampedArray) ,
	mem._calloc(Float32Array) ,
	mem._calloc(Float64Array)
] ;

allocators.forEach( function ( calloc ) {

	one( calloc ) ;

} ) ;

