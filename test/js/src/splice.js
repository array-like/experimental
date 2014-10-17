


test( "splice", function () {

	var a, b, c, m, n;

	m = 3;
	n = m + m;

	a = new Array( m );
	b = new Uint8Array( m );
	c = new Array( n );

	array.iota( a, 0, m, m );
	array.iota( b, 0, m, 0 );
	array.iota( c, 0, m, 0 );
	array.iota( c, m, n, m );

	array.splice( a, undefined, undefined, b, 0 );

	deepEqual( a, c, "undefined, undefined" );

	array.splice( a, undefined, b.length, [] );

	deepEqual( a.length, m, "check length" );

	array.splice( a, 0, 0, b, 0 );

	deepEqual( a, c, "0, 0" );

	array.splice( a, undefined, b.length, [] );

	deepEqual( a.length, m, "check length" );

	array.splice( a, -a.length, -a.length, b, 0 );

	deepEqual( a, c, "-a.length, -a.length" );

	array.splice( a, undefined, b.length, [] );

	deepEqual( a.length, m, "check length" );

});
