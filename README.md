<!--

@license Apache-2.0

Copyright (c) 2026 The Stdlib Authors.

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

# gwxpby

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Add each element in a strided array `x` to each element in a strided array `y` multiplied by a constant before assigning the results to a strided array `w`.

<section class="intro">

This BLAS extension implements the operation

<!-- <equation class="equation" label="eq:wxpby" align="center" raw="\mathbf{w} = \mathbf{x} + \beta \mathbf{y}" alt="Equation for wxpby operation."> -->

```math
\mathbf{w} = \mathbf{x} + \beta \mathbf{y}
```

<!-- <div class="equation" align="center" data-raw-text="\mathbf{w} = \mathbf{x} + \beta \mathbf{y}" data-equation="eq:wxpby">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@1fd7e186453ddeb76ce49e67bc410526e641989a/lib/node_modules/@stdlib/blas/ext/base/gwxpby/docs/img/equation_wxpby.svg" alt="Equation for wxpby operation.">
    <br>
</div> -->

<!-- </equation> -->

This API is a specialized version of the package [`@stdlib/blas-ext/base/gwaxpby`][@stdlib/blas/ext/base/gwaxpby] with `α = 1` and performs element-wise addition between a vector and a scaled vector with assignment to a third vector.

</section>

<!-- /.intro -->

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-gwxpby
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var gwxpby = require( '@stdlib/blas-ext-base-gwxpby' );
```

#### gwxpby( N, x, strideX, beta, y, strideY, w, strideW )

Adds each element in a strided array `x` to each element in a strided array `y` multiplied by a constant before assigning the results to a strided array `w`.

```javascript
var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
var y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
var w = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

gwxpby( x.length, x, 1, 3.0, y, 1, w, 1 );
// w => [ 7.0, 11.0, 15.0, 19.0, 23.0 ]
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **x**: first input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideX**: stride length for `x`.
-   **beta**: scalar constant.
-   **y**: second input [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideY**: stride length for `y`.
-   **w**: output [`Array`][mdn-array] or [`typed array`][mdn-typed-array].
-   **strideW**: stride length for `w`.

The `N` and stride parameters determine which elements in the strided arrays are accessed at runtime. For example, to add every other element of `x` to every other element of `y` multiplied by `beta` while assigning the results to every other element of `w`:

```javascript
var x = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
var y = [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ];
var w = [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ];

gwxpby( 3, x, 2, 3.0, y, 2, w, 2 );
// w => [ 4.0, 0.0, 12.0, 0.0, 20.0, 0.0 ]
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float64Array = require( '@stdlib/array-float64' );

// Initial arrays...
var x0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var y0 = new Float64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0 ] );
var w0 = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0, 0.0 ] );

// Create offset views...
var x1 = new Float64Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var y1 = new Float64Array( y0.buffer, y0.BYTES_PER_ELEMENT*1 ); // start at 2nd element
var w1 = new Float64Array( w0.buffer, w0.BYTES_PER_ELEMENT*2 ); // start at 3rd element

gwxpby( 3, x1, 1, 3.0, y1, 1, w1, 1 );
// w0 => <Float64Array>[ 0.0, 0.0, 8.0, 12.0, 16.0, 0.0 ]
```

<!-- lint disable maximum-heading-length -->

#### gwxpby.ndarray( N, x, strideX, offsetX, beta, y, strideY, offsetY, w, strideW, offsetW )

<!-- lint enable maximum-heading-length -->

Adds each element in a strided array `x` to each element in a strided array `y` multiplied by a constant before assigning the results to a strided array `w` using alternative indexing semantics.

```javascript
var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
var y = [ 2.0, 3.0, 4.0, 5.0, 6.0 ];
var w = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

gwxpby.ndarray( x.length, x, 1, 0, 3.0, y, 1, 0, w, 1, 0 );
// w => [ 7.0, 11.0, 15.0, 19.0, 23.0 ]
```

The function has the following additional parameters:

-   **offsetX**: starting index for `x`.
-   **offsetY**: starting index for `y`.
-   **offsetW**: starting index for `w`.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameters support indexing semantics based on starting indices. For example, to add the last three elements of `x` to the last three elements of `y` multiplied by `beta` while assigning the results to the last three elements of `w`:

```javascript
var x = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
var y = [ 1.0, 2.0, 3.0, 4.0, 5.0 ];
var w = [ 0.0, 0.0, 0.0, 0.0, 0.0 ];

gwxpby.ndarray( 3, x, 1, 2, 3.0, y, 1, 2, w, 1, 2 );
// w => [ 0.0, 0.0, 12.0, 16.0, 20.0 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If `N <= 0`, both functions return `w` unchanged.
-   Both functions support array-like objects having getter and setter accessors for array element access (e.g., [`@stdlib/array-base/accessor`][@stdlib/array/base/accessor]).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var logEach = require( '@stdlib/console-log-each' );
var gwxpby = require( '@stdlib/blas-ext-base-gwxpby' );

var opts = {
    'dtype': 'float64'
};
var x = discreteUniform( 10, -100, 100, opts );
var y = discreteUniform( 10, -100, 100, opts );
var w = discreteUniform( 10, -100, 100, opts );

gwxpby( x.length, x, 1, 3.0, y, 1, w, 1 );
logEach( '%d + %d * %d = %d', x, 3.0, y, w );
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-gwxpby.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-gwxpby

[test-image]: https://github.com/stdlib-js/blas-ext-base-gwxpby/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-gwxpby/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-gwxpby/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-gwxpby?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-gwxpby.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-gwxpby/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-gwxpby/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-gwxpby/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-gwxpby/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-gwxpby/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-gwxpby/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-gwxpby/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-gwxpby/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-gwxpby/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[@stdlib/array/base/accessor]: https://github.com/stdlib-js/array-base-accessor

[@stdlib/blas/ext/base/gwaxpby]: https://github.com/stdlib-js/blas-ext-base-gwaxpby

<!-- <related-links> -->

<!-- </related-links> -->

</section>

<!-- /.links -->
