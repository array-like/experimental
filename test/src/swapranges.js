import test from 'ava';
import * as array from '../../src';



import util from "util" ;
import mem from "@aureooms/js-memory" ;
import random from "@aureooms/js-random" ;
import operator from "@aureooms/js-operator" ;

function one (calloc) {

	test( util.format( "swapranges (%s)", calloc ), t => {

		var a, b, c, d, i, j, n, ai, aj, bi, resetb;

		n = 100;
		ai = 23;
		aj = 73;
		bi = 49;

		a = calloc( n );
		b = calloc( n );
		c = calloc( n );
		d = calloc( n );

		for ( i = 0 ; i < n ; ++i ) {
			a[i] = random.randint( 1, operator.pow( 2, 31 ) );
			b[i] = random.randint( 1, operator.pow( 2, 31 ) );
			c[i] = a[i];
			d[i] = b[i];
		}

		array.swapranges( a, ai, aj, b, bi );

		for ( i = 0 ; i < n ; ++i ) {

			if ( i < ai || i >= aj ) {
				t.deepEqual( a[i], c[i], util.format( "a[%d] === c[%d]", i, i ) );
			}

			else {
				j = i - ai + bi;
				t.deepEqual( a[i], d[j], util.format( "a[%d] === d[%d]", i, j ) );
			}

			if ( i < bi || i >= bi + aj - ai ) {
				t.deepEqual( b[i], d[i], util.format( "b[%d] === d[%d]", i, i ) );
			}

			else {
				j = i - bi + ai;
				t.deepEqual( b[i], c[j], util.format( "b[%d] === c[%d]", i, j ) );
			}

		}

		array.swapranges( a, ai, aj, b, bi );

		t.deepEqual( a, c, "swapranges back check a" );
		t.deepEqual( b, d, "swapranges back check b" );

		array.swapranges( a, ai, aj, a, ai );

		t.deepEqual( a, c, "swapranges self check a" );

	});

};

const allocators = [
	mem.__calloc__(Array),
	mem.__calloc__(Int8Array),
	mem.__calloc__(Int16Array),
	mem.__calloc__(Int32Array),
	mem.__calloc__(Uint8Array),
	mem.__calloc__(Uint16Array),
	mem.__calloc__(Uint32Array),
	mem.__calloc__(Uint8ClampedArray),
	mem.__calloc__(Float32Array),
	mem.__calloc__(Float64Array)
];

allocators.forEach( function ( calloc ) {

	one( calloc );

});
