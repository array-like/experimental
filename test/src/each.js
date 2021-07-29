import test from 'ava';
import * as array from '../../src/index.js';


test( "each", t => {

	var a, b, c;

	a = [ 0, 1, 2, 3, 4 ];
	c = [];

	array.each( function ( item, index, b ) {

		c.push( item * index );
		t.deepEqual( b, a, `${index}` );

	}, a , 1, 4 );

	t.deepEqual( c, [ 1, 4, 9 ], "output");


});
