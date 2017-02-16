import test from 'ava';
import * as array from '../../../src';


import util from "util" ;

import compare from "@aureooms/js-compare" ;

import operator from "@aureooms/js-operator" ;
test( "sorted", t => {

function one ( f, a ) {

	var b, i, initializer;

	b = array.sorted( f, a );

	t.deepEqual( b.length, a.length, "length check" );

	initializer = {};

	array.reduce( function ( x, y ) {

		if ( x !== initializer ) {

			t.truthy( f( x, y ) <= 0, util.format( "f( %f, %f ) <= 0", x, y ) );

		}

		t.truthy( operator.contains( a, y ), util.format( "%f in %s", y, JSON.stringify( a ) ) );

		return y;

	}, b, initializer );

};


	[compare.increasing, compare.decreasing].forEach( function (f) {

		var a, i, n;

		a = [];

		n = 100;

		i = n;

		while ( i-- ) {
			a.push( Math.random() );
		}

		one( f, a );

	});

});
