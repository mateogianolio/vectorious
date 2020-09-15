<p align="center">
  <img src="https://github.com/mateogianolio/vectorious/raw/master/logo.gif" alt="Vectorious Logo" />
</p>

<p align="center">
  A linear algebra library, written in TypeScript and accelerated with C++ bindings to BLAS and LAPACK.
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/vectorious.svg" /> <img src="https://img.shields.io/travis/mateogianolio/vectorious.svg?style=flat&label=build" /> <img src="https://api.codeclimate.com/v1/badges/0b4035b94b0e84c5ac55/maintainability" />
</p>

### Usage

Follow the installation instructions in [nlapack](https://github.com/nperf/nlapack) and [nblas](https://github.com/nperf/nblas) to get maximum performance.

```bash
# with C++ bindings
$ npm install vectorious

# or, if you don't want C++ bindings
$ npm install vectorious --no-optional
```

```javascript
import v = require('vectorious');

const x = v.random(2, 2);
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
], dtype=float32)
*/

const y = v.range(0, 9).reshape(3, 3);
/*
array([
  [ 0, 1, 2 ],
  [ 3, 4, 5 ],
  [ 6, 7, 8 ]
], dtype=float32)
*/

const z = v.array([[1, 2], [3, 4]]);
/*
array([ [ 1, 2 ], [ 3, 4 ] ], dtype=float32)
*/

x.add(z);
/*
array([
  [
    1.26472008228302,
    2.410257577896118
  ],
  [
    3.4068727493286133,
    4.4589385986328125
  ]
], dtype=float32)
*/
```

### Examples

**Basic**
* [**Solving linear systems of equations**](https://github.com/mateogianolio/vectorious/tree/master/examples/solve.js)
* [**Using low-level BLAS routines**](https://github.com/mateogianolio/vectorious/tree/master/examples/blas.js)

**Machine learning**
* [**Neural network**](https://github.com/mateogianolio/vectorious/tree/master/examples/neural-network.js) (by [@lucidrains](https://github.com/lucidrains))
* [**Logistic regression**](https://github.com/mateogianolio/vectorious/tree/master/examples/logistic-regression.js)

### Documentation

* [**API Documentation**](https://mateogianolio.github.io/vectorious)
* [**Usage guides**](https://github.com/mateogianolio/vectorious/wiki)

### Benchmarks

Run benchmarks with

```bash
$ npm run benchmark
```
