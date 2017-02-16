import test from 'ava';
import * as array from '../../src';



import util from "util" ;
import mem from "@aureooms/js-memory" ;
import random from "@aureooms/js-random" ;
import operator from "@aureooms/js-operator" ;

function one (calloc) {

test( "copy", t => {

		var a, b, i, j, n, ai, aj, bi, resetb;

		resetb = function () {
			for ( i = 0 ; i < n ; ++i ) {
				b[i] = 0;
			}
		};

		n = 100;
		ai = 23;
		aj = 73;
		bi = 49;

		a = calloc( n );
		b = calloc( n );

		for ( i = 0 ; i < n ; ++i ) {
			a[i] = random.randint( 1, operator.pow( 2, 31 ) );
		}

		resetb();

		for ( i = 0 ; i < n ; ++i ) {
			t.deepEqual( b[i], 0, util.format( "b[%d] === 0", i ) );
		}

		array.copy( a, 0, n, b, 0 );

		for ( i = 0 ; i < n ; ++i ) {
			t.deepEqual( b[i], a[i], util.format( "b[%d] === a[%d]", i, i ) );
		}

		resetb();


		array.copy( a, ai, aj, b, bi );

		for ( i = 0 ; i < n ; ++i ) {

			if ( i < bi || i >= bi + aj - ai ) {
				t.deepEqual( b[i], 0, util.format( "b[%d] === 0", i ) );
			}

			else {
				j = i - bi + ai;
				t.deepEqual( b[i], a[j], util.format( "b[%d] === a[%d]", i, j ) );
			}

		}

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
