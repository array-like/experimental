

var sort, random, sample, shuffle;

random = require( "aureooms-js-random" );
sort = require( "aureooms-js-sort" );
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

	array.sort( sort.increasing, a );

	b.sort( sort.increasing );

	deepEqual( array.slice( a, 0, n ) , b, ":)" );

});
