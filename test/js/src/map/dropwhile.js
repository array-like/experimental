
var one, functools, operator;

functools = require( "aureooms-js-functools" );
operator = require( "aureooms-js-operator" );

one = function ( iterable, predicate, expected ) {


	deepEqual(
		array.dropwhile( predicate, iterable, [] ),
		expected,
		JSON.stringify( [iterable, predicate] )
	);

};



test( "dropwhile", function () {

	one(
		array.range( 0, 100, 1, [] ),
		functools.rpartial( operator.lt, null, [50] ),
		array.range( 50, 100, 1, [] )
	);

	one(
		array.range( 0, 100, 1, [] ),
		functools.rpartial( operator.lt, null, [100] ),
		array.range( 0, 0, 1, [] )
	);

	one(
		array.range( 0, 0, 1, [] ),
		functools.rpartial( operator.lt, null, [1] ),
		array.range( 0, 0, 1, [] )
	);

});

