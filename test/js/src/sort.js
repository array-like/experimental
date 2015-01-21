

var compare, random, sample, shuffle;

random = require( "aureooms-js-random" );
compare = require( "aureooms-js-compare" );
sample = random.__sample__( random.randint );
shuffle = random.__shuffle__( sample );

test( "sort", function () {

	var a, b, n;

	n = 200;

	a = new Uint16Array( n );

	array.iota( a, 0, n, 0 );

	shuffle( a, 0, n );

	b = array.alloc( n );

	array.copy( a, 0, n, b, 0 );


	array.sort( compare.increasing, a );

	b.sort( compare.increasing );

	deepEqual( array.slice( a, 0, n ) , b, "increasing" );


	array.sort( compare.decreasing, a );

	b.sort( compare.decreasing );

	deepEqual( array.slice( a, 0, n ) , b, "decreasing" );

});
