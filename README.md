![vectorious](https://github.com/mateogianolio/vectorious/raw/master/logo.gif)

[![Backers on Open Collective](https://opencollective.com/vectorious/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/vectorious/sponsors/badge.svg)](#sponsors) ![version](https://img.shields.io/npm/v/vectorious.svg) [![CDNJS](https://img.shields.io/cdnjs/v/vectorious.svg)](https://cdnjs.com/libraries/vectorious) ![travis](https://img.shields.io/travis/mateogianolio/vectorious.svg?style=flat&label=build) [![maintainability](https://api.codeclimate.com/v1/badges/0b4035b94b0e84c5ac55/maintainability)](https://codeclimate.com/github/mateogianolio/vectorious/maintainability) [![test coverage](https://api.codeclimate.com/v1/badges/0b4035b94b0e84c5ac55/test_coverage)](https://codeclimate.com/github/mateogianolio/vectorious/test_coverage)

> A high performance linear algebra library, written in JavaScript and optimized with C++ bindings to [BLAS](http://www.netlib.org/blas/).

### Usage

[![greenkeeper](https://badges.greenkeeper.io/mateogianolio/vectorious.svg)](https://greenkeeper.io/)

##### In node.js

```bash
$ npm install vectorious
```

```javascript
var v = require('vectorious'),
    Matrix = v.Matrix,
    Vector = v.Vector,
    BLAS = v.BLAS; // access BLAS routines
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
<script src="https://cdnjs.cloudflare.com/ajax/libs/vectorious/4.8.1/vectorious.min.js"></script>
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

Internal benchmarks are located in the wiki section of this repository.

[**Go to wiki.**](https://github.com/mateogianolio/vectorious/wiki)

#### Compared to other libraries

> Note: I'm in the process of creating better benchmarks and plots. Until then, below you'll find a simple comparison between vectorious and three other popular linear algebra libraries.

The following benchmarks compare **Vectorious 4.1.0** with three popular matrix/vector libraries:

* [Numeric.js](http://www.numericjs.com)
* [Sylvester](http://sylvester.jcoglan.com)
* [Math.js](http://mathjs.org)

The graphs show operations per second on the vertical (y) axis.

Below is a graph comparing the **vector operations** `add`, `angle`, `dot`, `magnitude` (aka `L2-norm`), `normalize` and `scale`.

The operations were performed on vectors generated with `Vector.random(1048576)`.

![Vector operations](https://github.com/mateogianolio/vectorious/raw/master/benchmarks/vector_ops.png)

Below is a graph comparing the **matrix operations** `add`, `scale` and `transpose`.

The operations were performed on matrices generated with `Matrix.random(512, 512)`.

![Matrix operations](https://github.com/mateogianolio/vectorious/raw/master/benchmarks/matrix_ops.png)

## Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="graphs/contributors"><img src="https://opencollective.com/vectorious/contributors.svg?width=890&button=false" /></a>


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


