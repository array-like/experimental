import test from 'ava';

import util from "util" ;

import {increasing, decreasing} from "@total-order/primitive" ;

import {contains} from "@functional-abstraction/operator" ;

import {reduce} from '@array-like/reduce';

import {sorted} from '../../../src/index.js';

test( "sorted", t => {

function one ( f, a ) {

	var b, i, initializer;

	b = sorted( f, a );

	t.deepEqual( b.length, a.length, "length check" );

	initializer = {};

	reduce( function ( x, y ) {

		if ( x !== initializer ) {

			t.truthy( f( x, y ) <= 0, util.format( "f( %f, %f ) <= 0", x, y ) );

		}

		t.truthy( contains( a, y ), util.format( "%f in %s", y, JSON.stringify( a ) ) );

		return y;

	}, b, initializer );

};


	[increasing, decreasing].forEach( function (f) {

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
