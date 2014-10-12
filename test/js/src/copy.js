

var one, util, mem, random, operator;

util = require( "util" );
mem = require( "aureooms-js-mem" );
random = require( "aureooms-js-random" );
operator = require( "aureooms-js-operator" );

one = function (calloc) {

	test( "copy", function () {

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
			deepEqual( b[i], 0, util.format( "b[%d] === 0", i ) );
		}

		array.copy( a, 0, n, b, 0 );

		for ( i = 0 ; i < n ; ++i ) {
			deepEqual( b[i], a[i], util.format( "b[%d] === a[%d]", i, i ) );
		}

		resetb();


		array.copy( a, ai, aj, b, bi );

		for ( i = 0 ; i < n ; ++i ) {

			if ( i < bi || i >= bi + aj - ai ) {
				deepEqual( b[i], 0, util.format( "b[%d] === 0", i ) );
			}

			else {
				j = i - bi + ai;
				deepEqual( b[i], a[j], util.format( "b[%d] === a[%d]", i, j ) );
			}

		}

	});

};

allocators = [
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
