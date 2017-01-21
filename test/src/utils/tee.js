import test from 'ava';
import * as array from '../../../src';

test( "tee", t => {

var one = function ( iterable, n, out ) {

	var msg;

	msg = "tee " + JSON.stringify( [iterable, n] );

	t.deepEqual( array.tee( iterable, n, [] ), out, msg )

};

	one( [], 0, [] );
	one( [], 1, [[]] );
	one( [], 2, [[],[]] );
	one( [0], 0, [] );
	one( [0], 1, [[0]] );
	one( [0], 2, [[0],[0]] );
	one( [5, 7], 0, [] );
	one( [5, 7], 1, [[5, 7]] );
	one( [5, 7], 2, [[5, 7],[5, 7]] );

});
