import test from 'ava';
import * as array from '../../src';



import util from "util" ;
import mem from "@aureooms/js-memory" ;

function one ( type ) {

	var calloc, name;

	calloc = mem.__calloc__( type );
	name = type.name;

	test( util.format( "fill (%s)", name ), t => {

		var a, i, j, n, reseta, check;

		reseta = function () {
			for ( i = 0 ; i < n ; ++i ) {
				a[i] = 0;
			}
		};

		check = function (v) {
			t.deepEqual( a[i], v, util.format( "a[%s] === %s", i, v ) );
		};

		n = 100;

		a = calloc( n );

		reseta();

		array.fill(a, 2, 33, 2);
		array.fill(a, 16, 87, 3);
		array.fill(a, 47, 75, 5);
		array.fill(a, 60, 100, 7);
		array.fill(a, 80, 81, 11);

		for ( i = 0 ; i < n ; ++i ) {
			if ( i === 80 ) {
				check( 11 );
			}
			else if ( i >= 60 ) {
				check( 7 );
			}
			else if ( i >= 47 ) {
				check( 5 );
			}
			else if ( i >= 16 ) {
				check( 3 );
			}
			else if ( i >= 2 ) {
				check( 2 );
			}
			else {
				check( 0 );
			}
		}

	});

}

const types = [
	Array,
	Int8Array,
	Int16Array,
	Int32Array,
	Uint8Array,
	Uint16Array,
	Uint32Array,
	Uint8ClampedArray,
	Float32Array,
	Float64Array
];

types.forEach( one );
