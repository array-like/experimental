
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
