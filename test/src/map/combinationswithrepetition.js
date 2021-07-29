import test from 'ava';
import * as array from '../../../src/index.js';

test( "combinationswithrepetition", t => {

function one ( iterable, repeat, expected ) {


	t.deepEqual(
		array.combinationswithrepetition( iterable, repeat, [] ),
		expected,
		JSON.stringify( [iterable, repeat] )
	);

};




	one( "ABC", 2, [ ["A","A"], ["A","B"], ["A","C"], ["B","B"], ["B","C"], ["C","C"] ] );
	one( array.range( 0, 3, 1, [] ), 2, [ [0,0], [0,1], [0,2], [1,1], [1,2], [2,2] ] );
	one( array.range( 0, 0, 1, [] ), 2, [] );
	one( array.range( 0, 4, 1, [] ), 0, [ [] ] );
	one( array.range( 0, 0, 1, [] ), 0, [ [] ] );

});

