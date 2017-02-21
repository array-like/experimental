import test from 'ava';
import * as array from '../../src';



import util from "util" ;
import * as mem from "@aureooms/js-memory" ;
import * as random from "@aureooms/js-random" ;
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
