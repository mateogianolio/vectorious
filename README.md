![vectorious](https://github.com/mateogianolio/vectorious/raw/master/logo.gif)

[![Backers on Open Collective](https://opencollective.com/vectorious/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/vectorious/sponsors/badge.svg)](#sponsors) ![version](https://img.shields.io/npm/v/vectorious.svg) [![CDNJS](https://img.shields.io/cdnjs/v/vectorious.svg)](https://cdnjs.com/libraries/vectorious) ![travis](https://img.shields.io/travis/mateogianolio/vectorious.svg?style=flat&label=build) [![maintainability](https://api.codeclimate.com/v1/badges/0b4035b94b0e84c5ac55/maintainability)](https://codeclimate.com/github/mateogianolio/vectorious/maintainability) [![test coverage](https://api.codeclimate.com/v1/badges/0b4035b94b0e84c5ac55/test_coverage)](https://codeclimate.com/github/mateogianolio/vectorious/test_coverage)

> A linear algebra library, written in TypeScript and accelerated with C++ bindings to [BLAS](http://www.netlib.org/blas/).

### Usage

[![greenkeeper](https://badges.greenkeeper.io/mateogianolio/vectorious.svg)](https://greenkeeper.io/)

##### In node.js

```bash
# with BLAS bindings
$ npm install vectorious

# or, if you don't want BLAS bindings
$ npm install vectorious --no-optional
```

```javascript
import {
  Matrix,
  Vector,
  NDArray,
} from 'vectorious';

const x: Matrix = Matrix.random(2, 2);
/*
Matrix {
  shape: [ 2, 2 ],
  data:
   Float32Array [
     0.7041265660588281,
     0.6186458305857421,
     0.032954109874604454,
     0.5198025534810546 ],
  type: [Function: Float32Array] }
*/

const y: Vector = Vector.random(4, -5, 5, Int8Array);
/*
Vector {
  type: [Function: Int8Array],
  data: Int8Array [ -2, 2, 2, -1 ],
  length: 4 }
*/

const z = new NDArray([[[1], [2]]]).add(new NDArray([[[3], [4]]]));
/*
NDArray {
  data: Float32Array [ 4, 6 ],
  length: 2,
  shape: [ 1, 2, 1 ],
  type: [Function: Float32Array] }
*/
```

Will use your local BLAS copy (if any). Some notes for different operating systems:

* **OSX** - by default included in the Accelerate framework
* **Debian/Ubuntu** - different options, easiest is to `apt-get install libblas-dev`
* **Windows** - https://icl.cs.utk.edu/lapack-for-windows/

##### In browser

Download a [**release**](https://github.com/mateogianolio/vectorious/releases) and use it like this:

```html
<script src="vectorious.min.js"></script>
```

Or if you prefer to use a CDN:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/vectorious/5.3.1/vectorious.min.js"></script>
```

```html
<script>
  var A = new Matrix([[1], [2], [3]]),
      B = new Matrix([[1, 3, 5]]),
      C = A.multiply(B);

  console.log('C:', C.toArray());
  /* C: [
    [1, 3, 5],
    [2, 6, 10],
    [3, 9, 15]
  ] */
</script>
```

### Examples

**Basic**

* [**Solving linear systems of equations**](https://github.com/mateogianolio/vectorious/tree/master/examples/solve.js)
* [**Using low-level BLAS routines**](https://github.com/mateogianolio/vectorious/tree/master/examples/blas.js)

**Machine learning**
* [**Neural network**](https://github.com/mateogianolio/vectorious/tree/master/examples/neural-network.js) (by [@lucidrains](https://github.com/lucidrains))
* [**Logistic regression**](https://github.com/mateogianolio/vectorious/tree/master/examples/logistic-regression.js)

### Documentation

The documentation is located in the wiki section of this repository.

[**Go to wiki.**](https://github.com/mateogianolio/vectorious/wiki)

### Benchmarks

Benchmarks are performed using `Float32Array` of size `n` (matrices are sized `sqrt(n) x sqrt(n)`).

#### Specs

```
Macbook Pro Early '15
Processor: 2,7 GHz Intel Core i5
Memory: 8 GB 1867 MHz DDR3
GPU: Intel Iris Graphics 6100 1536 MB
```

#### Results

| Matrix |  |  |
|---------|--------|--------|
| ![add](benchmarks/Matrix/add.png) | ![augment](benchmarks/Matrix/augment.png) | ![binOp](benchmarks/Matrix/binOp.png) |
| ![determinant](benchmarks/Matrix/determinant.png) | ![diag](benchmarks/Matrix/diag.png) | ![gauss](benchmarks/Matrix/gauss.png) |
| ![inverse](benchmarks/Matrix/inverse.png) | ![lu](benchmarks/Matrix/lu.png) | ![multiply](benchmarks/Matrix/multiply.png) |
| ![plu](benchmarks/Matrix/plu.png) | ![product](benchmarks/Matrix/product.png) | ![rank](benchmarks/Matrix/rank.png) |
| ![rowAdd](benchmarks/Matrix/rowAdd.png) | ![scale](benchmarks/Matrix/scale.png) | ![solve](benchmarks/Matrix/solve.png) |
| ![subtract](benchmarks/Matrix/subtract.png) | ![swap](benchmarks/Matrix/swap.png) | ![trace](benchmarks/Matrix/trace.png) |
| ![transpose](benchmarks/Matrix/transpose.png) | | |

| Vector |  |  |
|---------|--------|--------|
| ![add](benchmarks/Vector/add.png) | ![angle](benchmarks/Vector/angle.png) | ![binOp](benchmarks/Vector/binOp.png) |
| ![combine](benchmarks/Vector/combine.png) | ![dot](benchmarks/Vector/dot.png) | ![normalize](benchmarks/Vector/normalize.png) |
| ![project](benchmarks/Vector/project.png) | ![scale](benchmarks/Vector/scale.png) | ![subtract](benchmarks/Vector/subtract.png) |

| NDArray |  |  |
|---------|--------|--------|
| ![add](benchmarks/NDArray/add.png) | ![copy](benchmarks/NDArray/copy.png) | ![dot](benchmarks/NDArray/dot.png) |
| ![magnitude](benchmarks/NDArray/magnitude.png) | ![max](benchmarks/NDArray/max.png) | ![min](benchmarks/NDArray/min.png) |
| ![product](benchmarks/NDArray/product.png) | ![scale](benchmarks/NDArray/scale.png) | ![subtract](benchmarks/NDArray/subtract.png) |


## Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="https://github.com/mateogianolio/vectorious/graphs/contributors"><img src="https://opencollective.com/vectorious/contributors.svg?width=890&button=false" /></a>


## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/vectorious#backer)]

<a href="https://opencollective.com/vectorious#backers" target="_blank"><img src="https://opencollective.com/vectorious/backers.svg?width=890"></a>


## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/vectorious#sponsor)]

<a href="https://opencollective.com/vectorious/sponsor/0/website" target="_blank"><img src="https://opencollective.com/vectorious/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/vectorious/sponsor/1/website" target="_blank"><img src="https://opencollective.com/vectorious/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/vectorious/sponsor/2/website" target="_blank"><img src="https://opencollective.com/vectorious/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/vectorious/sponsor/3/website" target="_blank"><img src="https://opencollective.com/vectorious/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/vectorious/sponsor/4/website" target="_blank"><img src="https://opencollective.com/vectorious/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/vectorious/sponsor/5/website" target="_blank"><img src="https://opencollective.com/vectorious/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/vectorious/sponsor/6/website" target="_blank"><img src="https://opencollective.com/vectorious/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/vectorious/sponsor/7/website" target="_blank"><img src="https://opencollective.com/vectorious/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/vectorious/sponsor/8/website" target="_blank"><img src="https://opencollective.com/vectorious/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/vectorious/sponsor/9/website" target="_blank"><img src="https://opencollective.com/vectorious/sponsor/9/avatar.svg"></a>


