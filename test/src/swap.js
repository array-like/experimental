import test from 'ava';
import * as array from '../../src';



import util from "util" ;
import mem from "@aureooms/js-memory" ;
import random from "@aureooms/js-random" ;
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

