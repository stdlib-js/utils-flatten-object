<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Flatten Object

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Flatten an object.



<section class="usage">

## Usage

```javascript
import flattenObject from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-flatten-object@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/utils-flatten-object/tags). For example,

```javascript
import flattenObject from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-flatten-object@v0.2.2-deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { factory } from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-flatten-object@deno/mod.js';
```

<a name="flatten-object"></a>

#### flattenObject( obj\[, options] )

Flattens an `object`.

```javascript
var obj = {
    'a': {
        'b': {
            'c': 'd'
        }
    }
};

var out = flattenObject( obj );
// returns { 'a.b.c': 'd' }
```

The function accepts the following `options`:

-   **depth**: maximum depth to flatten.
-   **copy**: `boolean` indicating whether to deep [copy][@stdlib/utils/copy] property values. Default: `false`.
-   **delimiter**: key path delimiter. Default: `'.'`.
-   **flattenArrays**: `boolean` indicating whether to flatten `arrays`. Default: `false`.

To flatten to a specified depth, set the `depth` option.

```javascript
var obj = {
    'a': {
        'b': {
            'c': 'd'
        }
    }
};

var out = flattenObject( obj, {
    'depth': 1
});
// returns { 'a.b': {'c': 'd'} }

var bool = ( obj.a.b === out['a.b'] );
// returns true
```

To deep [copy][@stdlib/utils/copy] property values, set the `copy` option to `true`.

```javascript
var obj = {
    'a': {
        'b': {
            'c': 'd'
        }
    }
};

var out = flattenObject( obj, {
    'depth': 1,
    'copy': true
});
// returns { 'a.b': { 'c': 'd' } }

var bool = ( obj.a.b === out['a.b'] );
// returns false
```

To specify a custom key path delimiter, set the `delimiter` option.

```javascript
var obj = {
    'a': {
        'b': {
            'c': 'd'
        }
    }
};

var out = flattenObject( obj, {
    'delimiter': '-|-'
});
// returns { 'a-|-b-|-c': 'd' }
```

By default, the function does **not** flatten `arrays`. To flatten `arrays`, set the `flattenArrays` option to `true`.

```javascript
var obj = {
    'a': {
        'b': [ 1, 2, 3 ]
    }
};

var out = flattenObject( obj, {
    'flattenArrays': true
});
// returns { 'a.b.0': 1, 'a.b.1': 2, 'a.b.2': 3 }
```

#### flattenObject.factory( options )

Returns a `function` to flatten an `object`.

```javascript
var flatten = flattenObject.factory({
    'delimiter': '|',
    'flattenArrays': true
});

var obj = {
    'a': {
        'b': {
            'c': 'd'
        }
    }
};

var out = flatten( obj );
// returns { 'a|b|c': 'd' }

obj = {
    'a': {
        'b': [ 1, 2, 3 ]
    }
};
out = flatten( obj );
// returns { 'a|b|0': 1, 'a|b|1': 2, 'a|b|2': 3 }
```

The function accepts the same `options` as [`flattenObject()`](#flatten-object).

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- TODO: update once Buffer wrapper -->

<!-- eslint no-undef: "error" -->

<!-- eslint-disable no-buffer-constructor -->

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import string2buffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/buffer-from-string@deno/mod.js';
import flattenObject from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-flatten-object@deno/mod.js';

function noop() {
    // Do nothing...
}

var obj = {
    'a': {
        'b': {
            'beep': 'boop',
            'foo': 'bar'
        },
        'c': [ 1, 2, 3 ],
        'd': true,
        'e': null,
        'f': 3.14,
        'g': new Date(),
        'h': {
            'bip': 6,
            'bop': [ 4, 5, 6 ]
        },
        'i': [ null, true, {} ],
        'j': /.*/,
        'k': noop,
        'l': NaN,
        'm': [],
        'n': string2buffer( 'hello' ),
        'o': {
            'data': new Float64Array( 10 )
        },
        'p': {
            '1': {
                '2': {
                    '3': {}
                }
            }
        }
    }
};

var out = flattenObject( obj, {
    'depth': 5,
    'copy': true,
    'flattenArrays': false,
    'delimiter': '-|-'
});
/* returns
    {
        'a-|-b-|-beep': 'boop',
        'a-|-b-|-foo': 'bar',
        'a-|-c': [1,2,3],
        'a-|-d': true,
        'a-|-e': null,
        'a-|-f': 3.14,
        'a-|-g': <Date>,
        'a-|-h-|-bip': 6,
        'a-|-h-|-bop': [4,5,6],
        'a-|-i': [null,true,{}],
        'a-|-j': <RegExp>,
        'a-|-k': <Function>,
        'a-|-l': NaN,
        'a-|-m': [],
        'a-|-n': <Buffer>,
        'a-|-o-|-data': <Float64Array>,
        'a-|-p-|-1-|-2-|-3': {}
    }
*/
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-flatten-array`][@stdlib/utils/flatten-array]</span><span class="delimiter">: </span><span class="description">flatten an array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-flatten-object.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-flatten-object

[test-image]: https://github.com/stdlib-js/utils-flatten-object/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/utils-flatten-object/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-flatten-object/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-flatten-object?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-flatten-object.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-flatten-object/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-flatten-object/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-flatten-object/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-flatten-object/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-flatten-object/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-flatten-object/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-flatten-object/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-flatten-object/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-flatten-object/main/LICENSE

[@stdlib/utils/copy]: https://github.com/stdlib-js/utils-copy/tree/deno

<!-- <related-links> -->

[@stdlib/utils/flatten-array]: https://github.com/stdlib-js/utils-flatten-array/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
