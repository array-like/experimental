
var repr = function ( array, left, right ) {
	return JSON.stringify( slice( array, left, right ) );
};

exports.repr = repr;
