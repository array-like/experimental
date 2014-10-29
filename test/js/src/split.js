

var one;

one = function ( f, a, i, j ) {

	var b, p, k, n;

	n = a.length;

	b = array.alloc( n );

	array.copy( a, 0, n, b, 0 );

	p = array.split( f, a, i, j );

	ok ( p >= i, JSON.stringify( [ a, i, j, "p >= i", p ] ) );

	for ( k = 0 ; k < i ; ++k ) {
		deepEqual( a[k], b[k], JSON.stringify( [ a, i, j, "a[k] === b[k]", k ] ) );
	}

	for ( k = i ; k < p ; ++k ) {
		deepEqual( f( a[k] ), 0, JSON.stringify( [ a, i, j, "f( a[k] ) === 0", a[k], k ] ) );
	}

	for ( k = p ; k < j ; ++k ) {
		deepEqual( f( a[k] ), 1, JSON.stringify( [ a, i, j, "f( a[k] ) === 1", a[k], k ] ) );
	}

	for ( k = j ; k < n ; ++k ) {
		deepEqual( a[k], b[k], JSON.stringify( [ a, i, j, "a[k] === b[k]", k ] ) );
	}


};

test( "split", function () {

	one ( function ( x ) {
		return + ( x > 1 );
	}, [2, 3, 0, 1, 1, 4, 5, 6, 7], 2, 5, [2, 3, 0, 1, 1, 4, 5, 6, 7] );

	one ( function ( x ) {
		return + ( x < 1 );
	}, [2, 3, 0, 1, 1, 4, 5, 6, 7], 2, 5, [2, 3, 1, 1, 0, 4, 5, 6, 7] );

	one ( function ( x ) {
		return + ( x < 1 );
	}, [2, 3, 0, 0, 1, 4, 5, 6, 7], 2, 5, [2, 3, 0, 0, 1, 4, 5, 6, 7] );

	one ( function ( x ) {
		return + ( x < 1 );
	}, [2, 3, 0, 0, 1, 4, 5, 6, 7], 2, 5, [2, 3, 1, 0, 0, 4, 5, 6, 7] );

	one ( function ( x ) {
		return + ( x < 1 );
	}, [0, 0, 0, 0, 0], 1, 5, [0, 0, 0, 0, 0] );

	one ( function ( x ) {
		return + ( x < 1 );
	}, [1, 1, 1, 1, 1], 1, 5, [1, 1, 1, 1, 1] );

	one ( function ( x ) {
		return + ( x > 1 );
	}, [0, 0, 0, 0, 0], 1, 5, [0, 0, 0, 0, 0] );

	one ( function ( x ) {
		return + ( x > 1 );
	}, [1, 1, 1, 1, 1], 1, 5, [1, 1, 1, 1, 1] );



});
