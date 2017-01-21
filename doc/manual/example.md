
```js
let A = array.alloc( 10000 ) ;

array.iota( A , 0 , 10000 , 1 ) ;

let B = array.alloc( 20000 ) ;

array.copy( A , 0 , 10000 , B ,     0 ) ;
array.copy( A , 0 , 10000 , B , 10000 ) ;

B ; // [ 0 , 1 , ... , 9999 , 0 , 1 , ... , 9999 ]
```
