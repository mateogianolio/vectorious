![vectorious](https://github.com/mateogianolio/vectorious/raw/master/logo.gif)

![version](https://img.shields.io/npm/v/vectorious.svg?style=flat&label=version) ![travis](https://img.shields.io/travis/mateogianolio/vectorious.svg?style=flat)
![climate](https://img.shields.io/codeclimate/github/mateogianolio/vectorious.svg?style=flat&label=climate) ![coverage](https://img.shields.io/codeclimate/coverage/github/mateogianolio/vectorious.svg?style=flat&label=coverage)

Vectorious is a high performance linear algebra library, written in JavaScript and powered by [nBLAS](https://github.com/mateogianolio/nblas) for Node.js bindings to CBLAS.

```bash
$ npm install vectorious
```

```javascript
var vectorious = require('vectorious');
```

It can be used in the browser too! Download a  [**release**](https://github.com/mateogianolio/vectorious/releases) and use it like this:

```html
<script src="vectorious-4.1.5.js"></script>
<script>
  var A = new Matrix([
    [1],
    [2],
    [3]
  ]);

  var B = new Matrix([
    [1, 3, 5],
  ]);

  var C = A.multiply(B);
  console.log('C:', C.toArray());
  /* C: [
    [1, 3, 5],
    [2, 6, 10],
    [3, 9, 15]
  ] */
</script>
```

### [Examples](https://github.com/mateogianolio/vectorious/tree/master/examples)

* [Solving **linear systems of equations**](https://github.com/mateogianolio/vectorious/tree/master/examples/linsolve.js)
* [Implementing a **neural network**](https://github.com/mateogianolio/vectorious/tree/master/examples/neural-network.js)

### [Documentation](https://github.com/mateogianolio/vectorious/wiki)

The documentation is located in the 'wiki' section of this repository.

* [**Matrix **](https://github.com/mateogianolio/vectorious/wiki/Matrix-API)
* [**Vector**](https://github.com/mateogianolio/vectorious/wiki/Vector-API)

### [Benchmarks](https://github.com/mateogianolio/vectorious/wiki/Benchmarks)

Internal benchmarks are located in the 'wiki' section of this repository.

---

The following benchmarks compare Vectorious 4.1.0 with three popular matrix/vector libraries:

* [Numeric.js](http://www.numericjs.com)
* [Sylvester](http://sylvester.jcoglan.com)
* [Math.js](http://mathjs.org)

The graphs show operations per second on the vertical (y) axis.

#### Vector operations

Below is a graph comparing the vector operations `add`, `angle`, `dot`, `magnitude` (aka `L2-norm`), `normalize` and `scale`.

The operations were performed on vectors generated with `Vector.random(1048576)`.

![Vector operations](https://github.com/mateogianolio/vectorious/raw/master/benchmarks/vector_ops.png)

#### Matrix operations

Below is a graph comparing the matrix operations `add`, `scale` and `transpose`.

The operations were performed on matrices generated with `Matrix.random(512, 512)`.

![Matrix operations](https://github.com/mateogianolio/vectorious/raw/master/benchmarks/matrix_ops.png)
