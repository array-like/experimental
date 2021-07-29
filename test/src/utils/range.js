import test from 'ava';
import * as array from '../../../src/index.js';

test( "range", t => {

var one = function ( begin, end, step, out ) {

	var msg;

	msg = "range " + JSON.stringify( [begin, end, step] );

	t.deepEqual( array.range( begin, end, step, [] ), out, msg );

};


	one( 0, 0, 1, [] );
	one( 1, 1, 1, [] );
	one( 0, 1, 1, [0] );
	one( 0, 1, 2, [0] );
	one( 0, 7, 1, [0, 1, 2, 3, 4, 5, 6] );
	one( 7, 0, -1, [7, 6, 5, 4, 3, 2, 1] );

});
