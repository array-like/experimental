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

	if ( aj < 0 ) {
		aj += a.length;
	}

	return Array.prototype.splice.apply(
		a,
		[ai, aj - ai].concat( slice( b, bi, bj ) )
	);
};

exports.splice = splice;

})(typeof exports === 'undefined' ? this['array'] = {} : exports);
