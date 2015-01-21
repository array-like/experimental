

var one, util, mem, compare, random, operator;

util = require( "util" );
mem = require( "aureooms-js-mem" );
compare = require( "aureooms-js-compare" );
random = require( "aureooms-js-random" );
operator = require( "aureooms-js-operator" );

one = function ( type, compare ) {

	var calloc, name;

	calloc = mem.__calloc__( type );
	name = type.name;

	test( util.format( "opt (%s, %s)", name, compare ), function () {

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

		ok( operator.contains( a, min ), "array contains min" );
		ok( operator.contains( a, max ), "array contains max" );
		ok( argmin >= 0 && argmin < n, "array contains argmin" );
		ok( argmax >= 0 && argmax < n, "array contains argmax" );

		deepEqual( a[argmin], min, "argmin is min" );
		deepEqual( a[argmax], max, "argmax is max" );

		for ( i = 0; i < n ; ++i ) {
			ok( compare( min, a[i] ) <= 0, util.format( "%s <= %s", min, a[i] ) );
			ok( compare( max, a[i] ) >= 0, util.format( "%s >= %s", max, a[i] ) );
		}

		deepEqual( array.min( compare, a, 0, 0 ), undefined, "min on empty array returns undefined" );
		deepEqual( array.max( compare, a, 0, 0 ), undefined, "max on empty array returns undefined" );
		deepEqual( array.argmin( compare, a, 0, 0 ), undefined, "argmin on empty array returns undefined" );
		deepEqual( array.argmax( compare, a, 0, 0 ), undefined, "argmax on empty array returns undefined" );

	});

};

types = [
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

predicates = [
	compare.increasing,
	compare.decreasing
];

types.forEach( function ( type ) {
	predicates.forEach( function ( compare ) {
		one( type, compare );
	});
});
