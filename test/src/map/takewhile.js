import test from 'ava';
import * as array from '../../../src';


import * as functools from "@functional-abstraction/functools" ;
import * as operator from "@functional-abstraction/operator" ;
test( "takewhile", t => {

function one ( iterable, predicate, expected ) {


	t.deepEqual(
		array.takewhile( predicate, iterable, [] ),
		expected,
		JSON.stringify( [iterable, predicate] )
	);

};




	one(
		array.range( 0, 100, 1, [] ),
		functools.rpartial( operator.lt, [50] ),
		array.range( 0, 50, 1, [] )
	);

	one(
		array.range( 0, 100, 1, [] ),
		functools.rpartial( operator.lt, [100] ),
		array.range( 0, 100, 1, [] )
	);

	one(
		array.range( 0, 0, 1, [] ),
		functools.rpartial( operator.lt, [1] ),
		array.range( 0, 0, 1, [] )
	);

});

