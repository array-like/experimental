

test( "each", function () {

	var a, b, c;

	a = [ 0, 1, 2, 3, 4 ];
	c = [];

	array.each( function ( item, index, b ) {

		c.push( item * index );
		deepEqual( b, a, index );

	}, a , 1, 4 );

	deepEqual( c, [ 1, 4, 9 ], "output");


});
