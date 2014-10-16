
var each = function ( callback, array, left, right ) {

	for ( ; left < right ; ++left ) {
		callback( array[left], left, array );
	}

};

exports.each = each;
