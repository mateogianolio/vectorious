# Vectorious

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

**Browser**

Download a [release](https://github.com/mateogianolio/vectorious/releases) and use it like this:

```html
<script src="vectorious-4.0.0.js"></script>
<script>
  // e.g. var vector = new vectorious.Vector()
</script>
```

## [Documentation](https://github.com/mateogianolio/vectorious/wiki)

## [Examples](https://github.com/mateogianolio/vectorious/tree/master/examples)

* [Solve Ax = B](https://github.com/mateogianolio/vectorious/tree/master/examples/linsolve.js)

## [Benchmarks](https://github.com/mateogianolio/vectorious/wiki/Benchmarks)

The following plot compares Vectorious (4.0.4) benchmarks for basic **vector** operations with three popular matrix/vector libraries: [numeric.js](http://www.numericjs.com), [sylvester](http://sylvester.jcoglan.com) and [math.js](http://mathjs.org).

These benchmarks were performed on a MacBook Pro (i5 2.7GHz, OSX 10.11, 8GB RAM) with [benchmark.js](https://github.com/bestiejs/benchmark.js/) on random vectors of **1 048 576 elements**.

[**Interactive plot**](https://plot.ly/~mateogianolio/123/basic-operations-on-vectors-of-1-048-576-elements/)

![Vector operation comparison](https://github.com/mateogianolio/vectorious/blob/master/benchmarks/vector_ops.png)

The following plot compares Vectorious (4.0.4) benchmarks for basic **matrix** operations with three popular matrix/vector libraries: [numeric.js](http://www.numericjs.com), [sylvester](http://sylvester.jcoglan.com) and [math.js](http://mathjs.org).

These benchmarks were performed on a MacBook Pro (i5 2.7GHz, OSX 10.11, 8GB RAM) with [benchmark.js](https://github.com/bestiejs/benchmark.js/) on random matrices of **256x256 elements**.

[**Interactive plot**](https://plot.ly/~mateogianolio/121/basic-operations-on-matrices-of-256x256-elements/)

![Vector operation comparison](https://github.com/mateogianolio/vectorious/blob/master/benchmarks/matrix_ops.png)
