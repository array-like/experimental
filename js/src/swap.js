
var swap = function ( a , i , j ) {

	var tmp ;

	tmp  = a[i] ;
	a[i] = a[j] ;
	a[j] = tmp ;

} ;

exports.swap = swap ;
