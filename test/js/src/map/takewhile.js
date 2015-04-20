
var one, functools, operator;

functools = require( "aureooms-js-functools" );
operator = require( "aureooms-js-operator" );

one = function ( iterable, predicate, expected ) {


	deepEqual(
		array.takewhile( predicate, iterable, [] ),
		expected,
		JSON.stringify( [iterable, predicate] )
	);

};



test( "takewhile", function () {

	one(
		array.range( 0, 100, 1, [] ),
		functools.rpartial( operator.lt, null, [50] ),
		array.range( 0, 50, 1, [] )
	);

	one(
		array.range( 0, 100, 1, [] ),
		functools.rpartial( operator.lt, null, [100] ),
		array.range( 0, 100, 1, [] )
	);

	one(
		array.range( 0, 0, 1, [] ),
		functools.rpartial( operator.lt, null, [1] ),
		array.range( 0, 0, 1, [] )
	);

});

