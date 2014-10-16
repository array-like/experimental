
var slice = function ( array, left, right ) {
	return Array.prototype.slice.call( array, left, right );
};

exports.slice = slice;
