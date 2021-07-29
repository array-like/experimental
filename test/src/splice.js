import test from 'ava';

import {alloc} from '@array-like/alloc';
import {iota} from '@array-like/fill';

import {splice} from '../../src/index.js';

test( "splice", t => {

	var a, b, c, m, n;

	m = 3;
	n = m + m;

	a = alloc( m );
	b = new Uint8Array( m );
	c = alloc( n );

	iota( a, 0, m, m );
	iota( b, 0, m, 0 );
	iota( c, 0, m, 0 );
	iota( c, m, n, m );

	splice( a, undefined, undefined, b, 0 );

	t.deepEqual( a, c, "undefined, undefined" );

	splice( a, undefined, b.length, [] );

	t.deepEqual( a.length, m, "check length" );

	splice( a, 0, 0, b, 0 );

	t.deepEqual( a, c, "0, 0" );

	splice( a, undefined, b.length, [] );

	t.deepEqual( a.length, m, "check length" );

	splice( a, -a.length, -a.length, b, 0 );

	t.deepEqual( a, c, "-a.length, -a.length" );

	splice( a, undefined, b.length, [] );

	t.deepEqual( a.length, m, "check length" );

});
