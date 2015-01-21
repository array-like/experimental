
var realloc = function ( data , len ) {

	var pt ;

	pt = alloc( len ) ;

	copy( data , 0 , Math.min( data.length , len ) , pt , 0 ) ;

	return pt ;

} ;

exports.realloc = realloc ;
