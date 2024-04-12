/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var isObject = require( '@stdlib/assert-is-plain-object' );
var pkg = require( './../package.json' ).name;
var flattenObject = require( './../lib' );


// MAIN //

bench( pkg+':factory:copy=true', function benchmark( b ) {
	var flatten;
	var opts;
	var obj;
	var out;
	var i;

	opts = {
		'copy': true,
		'flattenArrays': true
	};
	flatten = flattenObject.factory( opts );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		obj = {
			'a': 1,
			'b': {
				'b1': 2,
				'b2': {
					'bip': 6,
					'bop': [ 4, [ 5, 6 ] ]
				},
				'b3': 8
			},
			'c': 9
		};
		out = flatten( obj );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an object' );
		}
	}
	b.toc();
	if ( !isObject( out ) ) {
		b.fail( 'should return an object' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
