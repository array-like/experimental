import test from 'ava';

import {alloc} from '@array-like/alloc';
import {iota} from '@array-like/fill';

import {shuffle} from "@randomized/random" ;

import {get} from '../../src/index.js';

test( "get", t => {

	var a , i , n ;

	n = 10 ;

	a = alloc( n ) ;

	iota( a , 0 , n , 0 ) ;

	shuffle( a , 0 , n ) ;

	for ( i = 0 ; i < n ; ++i ) {

		t.is( get( a , i ) , a[i] , `${i}` ) ;

	}

} ) ;
