import test from 'ava';
import * as array from '../../src';

test( "rotate" , t => {


	var a , b , n ;

	n = 1000 ;

	a = array.alloc( n ) ;

	b = array.alloc( n ) ;

	array.iota( a , 0 , n , 0 ) ;

	array.copy( a , 0 , n , b , 0 ) ;

	array.rotate( a , 0 , n , n - 3 ) ;

	b = b.concat( b.splice( 0 , 3 ) ) ;

	t.deepEqual( a.length , n , "length did not change" ) ;

	t.deepEqual( a , b , "works as expected" ) ;

} ) ;
