import test from 'ava';
import * as array from '../../../src';


test( "reduce", t => {
var one = function ( callable, iterable, out ) {

	var msg;

	msg = "reduce " + JSON.stringify( iterable );

	t.deepEqual( array.reduce( callable, iterable, 0 ), out, msg )

};

	var addpow2 = function (x, y) {
		return x + y * y;
	};

	one( addpow2, [], 0 );
	one( addpow2, [1], 1 );
	one( addpow2, [1, 2, 3], 14 );
	one( addpow2, [1, 2, 3, 4, 5, 6], 91 );
	one( addpow2, [1, 2, 3, 4, 5, 6, 7, 8, 9], 285 );

});
