[js-array](http://aureooms.github.io/js-array)
==

Array manipulation code bricks for JavaScript.

```js
let buffer = array.alloc( 10000 ) ;
```

[![NPM license](http://img.shields.io/npm/l/aureooms-js-array.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-array/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-array.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-array)
[![Build Status](http://img.shields.io/travis/aureooms/js-array.svg?style=flat)](https://travis-ci.org/aureooms/js-array)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-array.svg?style=flat)](https://coveralls.io/r/aureooms/js-array)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-array.svg?style=flat)](https://david-dm.org/aureooms/js-array#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-array.svg?style=flat)](https://david-dm.org/aureooms/js-array#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-array.svg?style=flat)](https://codeclimate.com/github/aureooms/js-array)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-array.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-array)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-array.svg?style=flat)](https://github.com/aureooms/js-array/issues)
[![Documentation](https://aureooms.github.io/js-array/badge.svg)](https://aureooms.github.io/js-array/source.html)

Can be managed through [jspm](https://github.com/jspm/jspm-cli),
[duo](https://github.com/duojs/duo),
[component](https://github.com/componentjs/component),
[bower](https://github.com/bower/bower),
[ender](https://github.com/ender-js/Ender),
[jam](https://github.com/caolan/jam),
[spm](https://github.com/spmjs/spm),
and [npm](https://github.com/npm/npm).

## Install

### jspm
```terminal
jspm install github:aureooms/js-array
# or
jspm install npm:aureooms-js-array
```
### duo
No install step needed for duo!

### component
```terminal
component install aureooms/js-array
```

### bower
```terminal
bower install aureooms-js-array
```

### ender
```terminal
ender add aureooms-js-array
```

### jam
```terminal
jam install aureooms-js-array
```

### spm
```terminal
spm install aureooms-js-array --save
```

### npm
```terminal
npm install aureooms-js-array --save
```

## Require
### jspm
```js
let array = require( "github:aureooms/js-array" ) ;
// or
import array from 'aureooms-js-array' ;
```
### duo
```js
let array = require( "aureooms/js-array" ) ;
```

### component, ender, spm, npm
```js
let array = require( "aureooms-js-array" ) ;
```

### bower
The script tag exposes the global variable `array`.
```html
<script src="bower_components/aureooms-js-array/js/dist/array.min.js"></script>
```
Alternatively, you can use any tool mentioned [here](http://bower.io/docs/tools/).

### jam
```js
require( [ "aureooms-js-array" ] , function ( array ) { ... } ) ;
```

## Use

```js
let A = array.alloc( 10000 ) ;

array.iota( A , 0 , 10000 , 1 ) ;

let B = array.alloc( 20000 ) ;

array.copy( A , 0 , 10000 , B ,     0 ) ;
array.copy( A , 0 , 10000 , B , 10000 ) ;

B ; // [ 0 , 1 , ... , 9999 , 0 , 1 , ... , 9999 ]
```
