import test from 'ava';
import * as array from '../../src';



import random from "aureooms-js-random" ;
import compare from "aureooms-js-compare" ;

test( "sort", t => {

	var a, b, n;

	n = 200;

	a = new Uint16Array( n );

	array.iota( a, 0, n, 0 );

	random.shuffle( a, 0, n );

	b = array.alloc( n );

	array.copy( a, 0, n, b, 0 );

	array.sort( compare.increasing, a );

	b.sort( compare.increasing );

	t.deepEqual( array.slice( a, 0, n ) , b, "increasing" );


	array.sort( compare.decreasing, a );

	b.sort( compare.decreasing );

	t.deepEqual( array.slice( a, 0, n ) , b, "decreasing" );

});
