(function(exports, undefined){

	'use strict';


/* js/src/copy.js */


var copy = function ( a, ai, aj, b, bi ) {

	for ( ; ai < aj ; ++ai, ++bi ) {
		b[bi] = a[ai];
	}

};

exports.copy = copy;

/* js/src/each.js */

var each = function ( callback, array, left, right ) {

	for ( ; left < right ; ++left ) {
		callback( array[left], left, array );
	}

};

exports.each = each;

/* js/src/fill.js */


var fill = function ( a, i, j, v ) {

	for ( ; i < j ; ++i ) {
		a[i] = v;
	}

};

exports.fill = fill;

/* js/src/iota.js */


var iota = function ( a, i, j, v ) {

	for ( ; i < j ; ++i, ++v ){
		a[i] = v;
	}

};

exports.iota = iota;

/* js/src/opt.js */




var __opt__ = function ( pred ) {

	var opt = function ( a, i, j ) {

		var arg, tmp;

		if ( i >= j ) {
			return undefined;
		}

		arg = a[i];

		for ( ++i ; i < j ; ++i ) {

			tmp = a[i];

			if ( pred( tmp, arg ) ) {
				arg = tmp;
			}

		}

		return arg;
	};

	return opt;

};


exports.__opt__ = __opt__;

/* js/src/repr.js */

var repr = function ( array, left, right ) {
	return JSON.stringify( slice( array, left, right ) );
};

exports.repr = repr;

/* js/src/slice.js */

var slice = function ( array, left, right ) {
	return Array.prototype.slice.call( array, left, right );
};

exports.slice = slice;

/* js/src/sort.js */

var sort = function ( f, array ) {
	return Array.prototype.sort.call( array, f );
};

exports.sort = sort;

/* js/src/splice.js */

var splice = function ( a, ai, aj, b, bi, bj ) {

	if ( ai === undefined ) {
		ai = 0;
	}

	else if ( ai < 0 ) {
		ai += a.length;
	}

	if ( aj === undefined ) {
		aj = ai;
	}

	else if ( aj < 0 ) {
		aj += a.length;
	}

	return Array.prototype.splice.apply(
		a,
		[ai, aj - ai].concat( slice( b, bi, bj ) )
	);
};

exports.splice = splice;

/* js/src/split.js */


/**
 * rearranges an array in a lower [i, p[ and higher part [p, j[
 *
 * the lower part contains elements for which predicate === 0
 * the higher part contains elements for which predicate === 1
 *
 * @return {int} p the position of the first element of the higher part
 */

var split = function ( predicate, a, i, j ) {

	var x, y, tmp;

	x = i - 1;
	y = j;

	outer : while ( true ) {

		// search from right to left for an item
		// at the wrong place

		while ( true ) {

			--y;

			if ( x === y ) {
				break outer;
			}

			tmp = a[y];

			if ( predicate( tmp ) === 0 ) {
				break;
			}

		}

		// search from left to right for an item
		// at the wrong place

		while ( true ) {

			++x;

			if ( x === y ) {
				break outer;
			}

			if ( predicate( a[x] ) === 1 ) {
				break;
			}

		}

		// swap elements that are at the wrong place

		a[y] = a[x];
		a[x] = tmp;

	}

	// note a[y] could be different from tmp
	// x === y

	return y + 1 - predicate( a[y] );

};

exports.split = split;

/* js/src/swap.js */


var swap = function ( a, ai, aj, b, bi ) {

	var tmp;

	for ( ; ai < aj ; ++ai, ++bi ) {

		tmp = a[ai];
		a[ai] = b[bi];
		b[bi] = tmp;

	}

};

exports.swap = swap;

})(typeof exports === 'undefined' ? this['array'] = {} : exports);
