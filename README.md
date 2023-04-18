<p align="center">
  <img src="https://github.com/mateogianolio/vectorious/raw/master/logo.gif" alt="Vectorious Logo" />
</p>

<p align="center">
  A linear algebra library, written in TypeScript and accelerated with C++ bindings to BLAS and LAPACK.
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/vectorious.svg" /> <img src="https://img.shields.io/npm/dm/vectorious" /> <img src="https://img.shields.io/github/actions/workflow/status/mateogianolio/vectorious/release.yml?branch=master" /> <img src="https://img.shields.io/codeclimate/maintainability/mateogianolio/vectorious" /> <img src="https://img.shields.io/codeclimate/coverage/mateogianolio/vectorious" />
</p>

### Installation

Follow the installation instructions in [nlapack](https://github.com/nperf/nlapack) and [nblas](https://github.com/nperf/nblas) to get maximum performance.

```bash
# with C++ bindings
$ npm install vectorious

# or, if you don't want C++ bindings
$ npm install vectorious --no-optional
```

There are three output bundles exposed in this package.

#### CommonJS

A node.js bundle, can be found in `dist/index.js` and imported with the `require()` syntax:

```typescript
const v = require('vectorious');
```

#### Browser

A browser bundle, can be found in `dist/index.browser.js` and imported with the `<script>` tag:

```html
<script src="dist/index.browser.js" />
```

It exposes a global variable named `v` in the `window` object and can be accessed like this:

```html
<script>
  const x = v.array([1, 2, 3]);
</script>
```

#### ES module

Added in version 6.1.0, vectorious exposes an ES module bundle at `dist/index.esm.js` which can be imported using the `import` syntax:

```typescript
import { array } from 'vectorious';

const x = array([1, 2, 3]);
```

### Usage

Unless stated otherwise, all operations are in-place, meaning that the result of the operation overwrites data in the current (or in the static case leftmost) array. To avoid this, an explicit `copy` call is needed before the operation (`copy(x)` or `x.copy()`).

```javascript
import { array, random, range } from 'vectorious';

// Create a random 2x2 matrix
const x = random(2, 2);
/*
array([
  [
    0.26472008228302,
    0.4102575480937958
  ],
  [
    0.4068726599216461,
    0.4589384198188782
  ]
], dtype=float64)
*/

// Create a one-dimensional vector with values from
// 0 through 8 and reshape it into a 3x3 matrix
const y = range(0, 9).reshape(3, 3);
/*
array([
  [ 0, 1, 2 ],
  [ 3, 4, 5 ],
  [ 6, 7, 8 ]
], dtype=float64)
*/

// Add the second row of x to the first row of x
y.slice(0, 1).add(y.slice(1, 2))
/*
array([
  [ 3, 5, 7 ],
  [ 3, 4, 5 ],
  [ 6, 7, 8 ]
], dtype=float64)
*/

// Swap the first and second rows of x
y.swap(0, 1);
/*
array([
  [ 3, 4, 5 ],
  [ 3, 5, 7 ],
  [ 6, 7, 8 ]
], dtype=float64)
*/

// Create a 2x2x1 tensor
const z = array([[[1], [2]], [[3], [4]]]);
/*
array([
  [ [ 1 ], [ 2 ] ],
  [ [ 3 ], [ 4 ] ]
], dtype=float64)
*/
```

### Documentation

* [**API Documentation**](https://docs.vectorious.org/vectorious/6.1.0/)

### Examples

**Basic**
* [**Solving linear systems of equations**](https://github.com/mateogianolio/vectorious/tree/master/examples/solve.ts)
* [**Using low-level BLAS routines**](https://github.com/mateogianolio/vectorious/tree/master/examples/blas.ts)

**Machine learning**
* [**Neural network**](https://github.com/mateogianolio/vectorious/tree/master/examples/neural-network.ts) (by [@lucidrains](https://github.com/lucidrains))
* [**Logistic regression**](https://github.com/mateogianolio/vectorious/tree/master/examples/logistic-regression.ts)

### Testing

All functions are accompanied with a `.spec.ts` file.

The Jest testing framework is used for testing and the whole test suite can be run using a single command:

```sh
$ npm test
```

### Benchmarks

All functions are accompanied with a `.bench.ts` file.

Run all benchmarks with:

```bash
$ npm run benchmark
```

Or for a single function with:

```
$ npx ts-node src/core/abs.bench.ts
```
