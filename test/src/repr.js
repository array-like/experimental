import test from 'ava';
import * as array from '../../src';



test( "repr", t => {

	var a, b, n;

	n = 10;

	a = array.alloc( n );
	b = new Uint8Array( n );

	array.iota( a, 0, n, 0 );
	array.iota( b, 0, n, 0 );

	t.deepEqual( array.repr( b, 0, n ), JSON.stringify( a ), ":)" );

});
