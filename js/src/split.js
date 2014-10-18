

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

	return y + 1 - ( y >= i && predicate( a[y] ) );

};

exports.split = split;
