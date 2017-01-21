import test from 'ava';
import * as array from '../../../src';


test( "repeat", t => {
function one ( item, times, expected ) {


	t.deepEqual(
		array.repeat( item, times, [] ),
		expected,
		JSON.stringify( [item, times] )
	);

};




	[0, 1, -1, [], "A", "ABC", ["A"], [0, 1, -1], ["A", "B", "C"]]
	.forEach( function ( item ) {
		one( item, 0, [] );
		one( item, 1, [item] );
		one( item, 2, [item,item] );
		one( item, 3, [item,item,item] );
	});



});

