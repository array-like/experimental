import test from 'ava';
import * as array from '../../../src';
test( "sum", t => {
var one = function ( iterable, out ) {

	var msg;

	msg = "sum " + JSON.stringify( iterable );

	t.deepEqual( array.sum( iterable ), out, msg )

};



	one( [], 0 );
	one( [1], 1 );
	one( [1, 2, 3], 3 * 4 / 2 );
	one( [1, 2, 3, 4, 5, 6], 6 * 7 / 2 );
	one( [1, 2, 3, 4, 5, 6, 7, 8, 9], 9 * 10 / 2 );

});
