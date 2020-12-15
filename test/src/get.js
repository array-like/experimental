import test from 'ava';
import * as array from '../../src';


import * as random from "@aureooms/js-random" ;

test( "get", t => {

	var a , i , n ;

	n = 10 ;

	a = array.alloc( n ) ;

	array.iota( a , 0 , n , 0 ) ;

	random.shuffle( a , 0 , n ) ;

	for ( i = 0 ; i < n ; ++i ) {

		t.deepEqual( array.get( a , i ) , a[i] , `${i}` ) ;

	}

} ) ;
