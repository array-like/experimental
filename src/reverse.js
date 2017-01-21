import { swap } from '.' ;

export function reverse ( a , i , j ) {

	while ( i < j ) swap( a , i++ , --j ) ;

}

