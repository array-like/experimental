import test from 'ava';
import * as array from '../../../src';

test( "chain", t => {

	var one = function ( iterables, out ) {

		var msg;

		msg = "chain " + JSON.stringify( iterables );

		t.deepEqual( array.chain( iterables, [] ), out, msg );

	};

	one( [], [] );
	one( [[1]], [1] );
	one( [[1, 2, 3]], [1, 2, 3] );
	one( [[1, 2, 3], [4, 5, 6]], [1, 2, 3, 4, 5, 6] );
	one( [[1, 2, 3], [], [4, 5, 6]], [1, 2, 3, 4, 5, 6] );

});
