import test from 'ava';
import * as array from '../../../src';
test( "map", t => {
var one = function ( callable, iterable, out ) {

	var msg;

	msg = "map " + JSON.stringify( iterable );

	t.deepEqual( array.map( callable, iterable, [] ), out, msg )

};



	var pow2 = function (x) {
		return x * x;
	};

	one( pow2, [], [] );
	one( pow2, [1], [1] );
	one( pow2, [1, 2, 3], [1, 4, 9] );
	one( pow2, [1, 2, 3, 4, 5, 6], [1, 4, 9, 16, 25, 36] );
	one( pow2, [1, 2, 3, 4, 5, 6, 7, 8, 9], [1, 4, 9, 16, 25, 36, 49, 64, 81] );

});
