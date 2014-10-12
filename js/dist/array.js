(function(exports, undefined){

	'use strict';


/* js/src/copy.js */


var copy = function ( a, ai, aj, b, bi ) {

	for ( ; ai < aj ; ++ai, ++bi ) {
		b[bi] = a[ai];
	}

};

exports.copy = copy;

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

})(typeof exports === 'undefined' ? this['array'] = {} : exports);
