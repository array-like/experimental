


test( "repr", function () {

	var a, b, n;

	n = 10;

	a = array.alloc( n );
	b = new Uint8Array( n );

	array.iota( a, 0, n, 0 );
	array.iota( b, 0, n, 0 );

	deepEqual( array.repr( b, 0, n ), JSON.stringify( a ), ":)" );

});
