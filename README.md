# ![vectorious](https://github.com/mateogianolio/vectorious/raw/master/logo.png)

[![NPM](https://nodei.co/npm/vectorious.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/vectorious/)

![travis](https://img.shields.io/travis/mateogianolio/vectorious.svg) [![code climate](https://codeclimate.com/github/mateogianolio/vectorious/badges/gpa.svg)](https://codeclimate.com/github/mateogianolio/vectorious) [![test coverage](https://codeclimate.com/github/mateogianolio/vectorious/badges/coverage.svg)](https://codeclimate.com/github/mateogianolio/vectorious/coverage)

Vectorious is a high performance linear algebra library. It is written in
JavaScript using [nBLAS](https://github.com/mateogianolio/nblas) for single- and double-precision C++ bindings to CBLAS. In the future the goal is to also include C++ bindings to LAPACK. With native fallbacks,
it can be used without the bindings in supported browsers.

```bash
$ npm install vectorious
$ npm test
$ npm run benchmark
```

To enjoy the full performance of vectorious, you will need to have BLAS installed
on your system. It is by default included in the **OSX** Accelerate framework. On **Ubuntu**/**Debian** you can e.g. use libblas (`apt-get libblas-dev`). If you use **Windows**, you can [install LAPACK](http://icl.cs.utk.edu/lapack-for-windows/lapack/).

### Browser

Download a [release](https://github.com/mateogianolio/vectorious/releases) and use it like this:

```html
<script src="vectorious-4.1.0.js"></script>
<script>
  // e.g. var vector = new vectorious.Vector()
</script>
```

### [Documentation](https://github.com/mateogianolio/vectorious/wiki)

##### [Matrix ](https://github.com/mateogianolio/vectorious/wiki/Matrix-API)
##### [Vector](https://github.com/mateogianolio/vectorious/wiki/Vector-API)

### [Examples](https://github.com/mateogianolio/vectorious/tree/master/examples)

##### [Solve linear systems of equations](https://github.com/mateogianolio/vectorious/tree/master/examples/linsolve.js)

### [Benchmarks](https://github.com/mateogianolio/vectorious/wiki/Benchmarks)

The following benchmarks compare Vectorious 4.1.0 with these three popular matrix/vector libraries:

* [Numeric.js](http://www.numericjs.com)
* [Sylvester](http://sylvester.jcoglan.com)
* [Math.js](http://mathjs.org)

The graphs show operations per second on the vertical (y) axis.

| Vector | Matrix |
|:---|:---|
| `Vector.random(1048576)` | `Matrix.random(512, 512)` |
| ![Vector operations](https://github.com/mateogianolio/vectorious/raw/master/benchmarks/vector_ops.png) | ![Matrix operations](https://github.com/mateogianolio/vectorious/raw/master/benchmarks/matrix_ops.png) |
