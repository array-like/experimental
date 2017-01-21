import test from 'ava';
import * as array from '../../src';



import util from "util" ;
import mem from "aureooms-js-mem" ;
import compare from "aureooms-js-compare" ;
import random from "aureooms-js-random" ;
import operator from "aureooms-js-operator" ;

function one ( type, compare ) {

	var calloc, name;

	calloc = mem.__calloc__( type );
	name = type.name;

test( util.format( "opt (%s, %s)", name, compare ), t => {

		var a, i, n, min, max, argmin, argmax;

		n = 100;

		a = calloc( n );

		for ( i = 0 ; i < n ; ++i ) {
			a[i] = random.randint( 0, operator.pow(2, 31) );
		}

		min = array.min( compare, a, 0, n );
		max = array.max( compare, a, 0, n );
		argmin = array.argmin( compare, a, 0, n );
		argmax = array.argmax( compare, a, 0, n );

		t.truthy( operator.contains( a, min ), "array contains min" );
		t.truthy( operator.contains( a, max ), "array contains max" );
		t.truthy( argmin >= 0 && argmin < n, "array contains argmin" );
		t.truthy( argmax >= 0 && argmax < n, "array contains argmax" );

		t.deepEqual( a[argmin], min, "argmin is min" );
		t.deepEqual( a[argmax], max, "argmax is max" );

		for ( i = 0; i < n ; ++i ) {
			t.truthy( compare( min, a[i] ) <= 0, util.format( "%s <= %s", min, a[i] ) );
			t.truthy( compare( max, a[i] ) >= 0, util.format( "%s >= %s", max, a[i] ) );
		}

		t.deepEqual( array.min( compare, a, 0, 0 ), undefined, "min on empty array returns undefined" );
		t.deepEqual( array.max( compare, a, 0, 0 ), undefined, "max on empty array returns undefined" );
		t.deepEqual( array.argmin( compare, a, 0, 0 ), undefined, "argmin on empty array returns undefined" );
		t.deepEqual( array.argmax( compare, a, 0, 0 ), undefined, "argmax on empty array returns undefined" );

	});

};

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

const predicates = [
	compare.increasing,
	compare.decreasing
];

types.forEach( function ( type ) {
	predicates.forEach( function ( compare ) {
		one( type, compare );
	});
});
