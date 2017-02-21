import test from 'ava';
import * as array from '../../src';



import util from "util" ;
import * as mem from "@aureooms/js-memory" ;
import * as random from "@aureooms/js-random" ;
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
	mem._calloc(Array),
	mem._calloc(Int8Array),
	mem._calloc(Int16Array),
	mem._calloc(Int32Array),
	mem._calloc(Uint8Array),
	mem._calloc(Uint16Array),
	mem._calloc(Uint32Array),
	mem._calloc(Uint8ClampedArray),
	mem._calloc(Float32Array),
	mem._calloc(Float64Array)
];

allocators.forEach( function ( calloc ) {

	one( calloc );

});
