

var one, util, mem;

util = require( "util" );
mem = require( "aureooms-js-mem" );
random = require( "aureooms-js-random" );
operator = require( "aureooms-js-operator" );

one = function ( type, predicate ) {

	var calloc, name, opt;

	calloc = mem.__calloc__( type );
	name = type.name;

	opt = array.__opt__( predicate );

	test( util.format( "opt (%s, %s)", name, predicate ), function () {

		var a, i, n, arg;

		n = 100;

		a = calloc( n );

		for ( i = 0 ; i < n ; ++i ) {
			a[i] = random.randint( 0, operator.pow(2, 31) );
		}

		arg = opt( a, 0, n );

		ok( operator.contains( a, arg ), "array contains value" );

		for ( i = 0; i < n ; ++i ) {
			ok(
				predicate( arg, a[i] ),
				util.format("%s pred %s is true", arg, a[i])
			);
		}

		deepEqual( opt( a, 0, 0 ), undefined, "opt on empty array returns undefined" );
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
	operator.le,
	operator.ge
];

types.forEach( function ( type ) {
	predicates.forEach( function ( predicate ) {
		one( type, predicate );
	});
});
