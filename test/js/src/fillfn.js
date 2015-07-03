

var one, util, mem;

util = require( "util" );
mem = require( "aureooms-js-mem" );

one = function ( type ) {

	var calloc, name;

	calloc = mem.__calloc__( type );
	name = type.name;

	test( util.format( "fill (%s)", name ), function () {

		var a, i, j, n, reseta, check;

		reseta = function () {
			for ( i = 0 ; i < n ; ++i ) {
				a[i] = 0;
			}
		};

		check = function (v) {
			deepEqual( a[i], v, util.format( "a[%s] === %s", i, v ) );
		};

		n = 100;

		a = calloc( n );

		reseta();

		array.fillfn(a, 2, 33, function ( ) { return 1 + 1 ; } );
		array.fillfn(a, 16, 87, function ( ) { return 1 * 3 ; } );
		array.fillfn(a, 47, 75, function ( ) { return 10 / 2 ; } );
		array.fillfn(a, 60, 100, function ( ) { return Math.sqrt( 49 ) ; } );
		array.fillfn(a, 80, 81, function ( ) { return 20 - 9 ; } );

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

types.forEach( one );
