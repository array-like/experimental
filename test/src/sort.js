import test from 'ava';

import {shuffle} from "@randomized/random" ;
import {increasing, decreasing} from "@total-order/primitive" ;

import {alloc} from '@array-like/alloc';
import {copy} from '@array-like/copy';
import {iota} from '@array-like/fill';

import {sort, slice} from '../../src/index.js';

test( "sort", t => {

	const n = 200;

	const a = new Uint16Array( n );

	iota( a, 0, n, 0 );

	shuffle( a, 0, n );

	const b = alloc( n );

	copy( a, 0, n, b, 0 );

	sort( increasing, a );

	b.sort( increasing );

	t.deepEqual( slice( a, 0, n ) , b, "increasing" );


	sort( decreasing, a );

	b.sort( decreasing );

	t.deepEqual( slice( a, 0, n ) , b, "decreasing" );

});
