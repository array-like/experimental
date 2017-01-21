import test from 'ava';
import * as array from '../../src';



test( "splice", t => {

	var a, b, c, m, n;

	m = 3;
	n = m + m;

	a = array.alloc( m );
	b = new Uint8Array( m );
	c = array.alloc( n );

	array.iota( a, 0, m, m );
	array.iota( b, 0, m, 0 );
	array.iota( c, 0, m, 0 );
	array.iota( c, m, n, m );

	array.splice( a, undefined, undefined, b, 0 );

	t.deepEqual( a, c, "undefined, undefined" );

	array.splice( a, undefined, b.length, [] );

	t.deepEqual( a.length, m, "check length" );

	array.splice( a, 0, 0, b, 0 );

	t.deepEqual( a, c, "0, 0" );

	array.splice( a, undefined, b.length, [] );

	t.deepEqual( a.length, m, "check length" );

	array.splice( a, -a.length, -a.length, b, 0 );

	t.deepEqual( a, c, "-a.length, -a.length" );

	array.splice( a, undefined, b.length, [] );

	t.deepEqual( a.length, m, "check length" );

});
