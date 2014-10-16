
var sort = function ( f, array ) {
	return Array.prototype.sort.call( array, f );
};

exports.sort = sort;
