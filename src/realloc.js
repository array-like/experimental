import { alloc , copy } from '.' ;

export function realloc ( data , len ) {

	const pt = alloc( len ) ;

	copy( data , 0 , Math.min( data.length , len ) , pt , 0 ) ;

	return pt ;

}

