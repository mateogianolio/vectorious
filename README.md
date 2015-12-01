# Vectorious ![npm version](https://img.shields.io/npm/v/vectorious.svg) ![travis](https://img.shields.io/travis/mateogianolio/vectorious.svg) ![npm downloads](https://img.shields.io/npm/dm/vectorious.svg)

Vectorious is a high performance linear algebra library. It is written in
JavaScript using [nblas](https://github.com/mateogianolio/nblas) and [nlapack](https://github.com/mateogianolio/nlapack) for single- and double-precision C++ bindings to CBLAS and LAPACK. It features native fallbacks,
so you can use it without the bindings in your browser.

```bash
$ npm install vectorious
$ npm test
$ npm run benchmark
```

**Browser**

Download a [release](https://github.com/mateogianolio/vectorious/releases) and use it like this:

```html
<script src="vectorious-3.0.0.js"></script>
<script>
  // e.g. var vector = new vectorious.Vector()
</script>
```

## [Documentation](https://github.com/mateogianolio/vectorious/wiki)

## [Benchmarks](https://github.com/mateogianolio/vectorious/wiki/Benchmarks)
