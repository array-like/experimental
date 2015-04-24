
/**
 * In place O(n).
 *
 * Rotate right version.
 * See http://prakhar.me/articles/the-string-rotation-problem/.
 */

var rotate = function ( a , i , j , n ) {

	reverse( a , i , j ) ;
	reverse( a , i , i + n ) ;
	reverse( a , i + n , j ) ;

} ;

exports.rotate = rotate ;
