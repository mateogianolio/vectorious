(function() {
  'use strict';

  var assert = require('assert'),
      Matrix = require('../matrix'),
      Vector = require('../vector');

  describe('Matrix', function() {
    describe('Matrix(data, options)', function() {
      it('should work equivalent to Matrix.fromTypedArray when data is a typed array', function() {
        var a = new Matrix(new Float64Array([1, 2, 3]), { shape: [1, 3] });
        var b = Matrix.fromTypedArray(new Float64Array([1, 2, 3]), [1, 3]);

        assert.deepEqual(a, b);
      });

      it('should work equivalent to Matrix.fromArray when data is a regular 2d array', function() {
        var a = new Matrix([[1, 2, 3]]);
        var b = Matrix.fromArray([[1, 2, 3]]);

        assert.deepEqual(a, b);
      });

      it('should work equivalent to Matrix.fromMatrix when data is a Matrix', function() {
        var a = new Matrix(new Matrix([[1, 2, 3]]));
        var b = Matrix.fromMatrix(new Matrix([[1, 2, 3]]));

        assert.deepEqual(a, b);
      });

      it('should work equivalent to Matrix.fromVector when data is a Vector', function() {
        var a = new Matrix(new Vector([1, 2, 3]));
        var b = Matrix.fromVector(new Vector([1, 2, 3]));

        assert.deepEqual(a, b);
      });

      it('should work equivalent to Matrix.fromShape when data is a shape', function() {
        var a = new Matrix(3, 2);
        var b = new Matrix({ shape: [3, 2] });
        var c = Matrix.fromShape([3, 2]);

        assert.deepEqual(a, c);
        assert.deepEqual(b, c);
      });
    });

    describe('Matrix.fromTypedArray(data, shape)', function() {
      it('should work as expected', function() {
        var a = new Matrix(new Float64Array([1, 2, 3]), { shape: [1, 3] });

        assert(a instanceof Matrix);
        assert.equal(a.type, Float64Array);
        assert.deepEqual(a.shape, [1, 3]);
      });
    });

    describe('Matrix.fromArray(array)', function() {
      it('should work as expected', function() {
        var a = Matrix.fromArray([[1, 2, 3]]);

        assert(a instanceof Matrix);
        assert.equal(a.type, Float64Array);
        assert.deepEqual(a.data, [1, 2, 3]);
        assert.deepEqual(a.shape, [1, 3]);
      });
    });

    describe('Matrix.fromMatrix(matrix)', function() {
      it('should work as expected', function() {
        var a = Matrix.fromArray([[1, 2, 3]]);
        var b = Matrix.fromMatrix(a);

        assert(b instanceof Matrix);
        assert.deepEqual(a, b);
      });
    });

    describe('Matrix.fromVector(vector, shape)', function() {
      it('should work as expected', function() {
        var v = new Vector([1, 2, 3]);
        var a = Matrix.fromVector(v);

        assert(a instanceof Matrix);
        assert.equal(a.type, v.type);
        assert.deepEqual(a.data, [1, 2, 3]);
        assert.deepEqual(a.shape, [3, 1]);
      });
    });

    describe('Matrix.fromShape(shape)', function() {
      it('should work as expected', function() {
        var a = Matrix.fromShape([3, 2]);

        assert(a instanceof Matrix);
        assert.equal(a.type, Float64Array);
        assert.deepEqual(a.data, [0, 0, 0, 0, 0, 0]);
        assert.deepEqual(a.shape, [3, 2]);
      });
    });

    describe('Matrix.add(a, b)', function() {
      it('should work as the static equivalent of a.add(b)', function() {
        var a = new Matrix([[1, 1, 1]]);
        var b = new Matrix([[1, 2, 3]]);

        assert.deepEqual(new Matrix(a).add(b), Matrix.add(a, b));
      });
    });

    describe('Matrix.subtract(a, b)', function() {
      it('should work as the static equivalent of a.subtract(b)', function() {
        var a = new Matrix([[1, 1, 1]]);
        var b = new Matrix([[1, 2, 3]]);

        assert.deepEqual(new Matrix(a).subtract(b), Matrix.subtract(a, b));
      });
    });

    describe('Matrix.scale(a, scalar)', function() {
      it('should work as the static equivalent of a.scale(scalar)', function() {
        var a = new Matrix([[1, 1, 1]]);

        assert.deepEqual(new Matrix(a).scale(5), Matrix.scale(a, 5));
      });
    });

    describe('Matrix.product(a, b)', function() {
      it('should work as the static equivalent of a.product(b)', function() {
        var a = new Matrix([[3, 2, 1]]);
        var b = new Matrix([[1, 2, 3]]);

        assert.deepEqual(new Matrix(a).product(b), Matrix.product(a, b));
      });
    });

    describe('Matrix.multiply(a, b)', function() {
      it('should work as the static equivalent of a.multiply(b)', function() {
        var a = new Matrix([[1], [2], [3]]);
        var b = new Matrix([[1, 1, 1]]);

        assert.deepEqual(new Matrix(a).multiply(b), Matrix.multiply(a, b));
      });
    });

    describe('Matrix.plu(a)', function() {
      it('should work as the static equivalent of a.plu()', function() {
        var a = new Matrix([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);

        assert.deepEqual(new Matrix(a).plu(), Matrix.plu(a));
      });
    });

    describe('Matrix.augment(a, b)', function() {
      it('should work as the static equivalent of a.augment(b)', function() {
        var a = new Matrix([[1, 1, 1]]);
        var b = new Matrix([[1, 2, 3]]);

        assert.deepEqual(new Matrix(a).augment(b), Matrix.augment(a, b));
      });
    });

    describe('Matrix.equals(a, b)', function() {
      it('should work as the static equivalent of a.equals(b)', function() {
        var a = new Matrix([[1, 1, 1]]);
        var b = new Matrix([[1, 1, 1]]);

        assert.deepEqual(new Matrix(a).equals(b), Matrix.equals(a, b));
      });
    });

    describe('Matrix.identity()', function() {
      it('should throw error if invalid size', function() {
        assert.throws(Matrix.identity.bind(new Matrix(), -1), Error);
        assert.throws(Matrix.identity.bind(new Matrix(), 0), Error);
      });

      it('should work as expected', function() {
        assert.deepEqual(new Matrix([[1, 0, 0], [0, 1, 0], [0, 0, 1]]), Matrix.identity(3));
      });
    });

    describe('Matrix.magic()', function() {
      it('should throw error if invalid size', function() {
        assert.throws(Matrix.magic.bind(new Matrix(), -1), Error);
        assert.throws(Matrix.identity.bind(new Matrix(), 0), Error);
      });

      it('should work as expected', function() {
        assert.deepEqual(new Matrix([[8, 1, 6], [3, 5, 7], [4, 9, 2]]), Matrix.magic(3));
      });
    });

    describe('Matrix.zeros()', function() {
      it('should throw error if invalid size', function() {
        assert.throws(Matrix.zeros.bind(new Matrix(), 0, 0), Error);
        assert.throws(Matrix.zeros.bind(new Matrix(), -1, 1), Error);
        assert.throws(Matrix.zeros.bind(new Matrix(), 1, -1), Error);
      });

      it('should work as expected', function() {
        assert.deepEqual(new Matrix([[0, 0, 0]]), Matrix.zeros(1, 3));
        assert.deepEqual(new Matrix([[0], [0], [0]]), Matrix.zeros(3, 1));
        assert.deepEqual(new Matrix([[0, 0], [0, 0]]), Matrix.zeros(2, 2));
      });
    });

    describe('Matrix.ones()', function() {
      it('should throw error if invalid size', function() {
        assert.throws(Matrix.ones.bind(new Matrix(), 0, 0), Error);
        assert.throws(Matrix.ones.bind(new Matrix(), -1, 1), Error);
        assert.throws(Matrix.ones.bind(new Matrix(), 1, -1), Error);
      });

      it('should work as expected', function() {
        assert.deepEqual(new Matrix([[1, 1, 1]]), Matrix.ones(1, 3));
        assert.deepEqual(new Matrix([[1], [1], [1]]), Matrix.ones(3, 1));
        assert.deepEqual(new Matrix([[1, 1], [1, 1]]), Matrix.ones(2, 2));
      });
    });

    describe('Matrix.prototype', function() {
      describe('.add()', function() {
        it('should throw error when sizes do not match', function() {
          var a = new Matrix([[1, 2], [3, 4]]);
          var b = new Matrix([[1, 2]]);

          assert.throws(a.add.bind(a, b), Error);
        });

        it('should work as expected', function() {
          var a = new Matrix([[1, 2], [3, 4]]);
          var b = new Matrix([[5, 6], [7, 8]]);
          var c = new Matrix([[6, 8], [10, 12]]);

          assert.deepEqual(c, a.add(b));
        });
      });

      describe('.subtract()', function() {
        it('should throw error when sizes do not match', function() {
          var a = new Matrix([[1, 2], [3, 4]]);
          var b = new Matrix([[1, 2]]);

          assert.throws(a.subtract.bind(a, b), Error);
        });

        it('should work as expected', function() {
          var a = new Matrix([[1, 2], [3, 4]]);
          var b = new Matrix([[5, 6], [7, 8]]);
          var c = new Matrix([[-4, -4], [-4, -4]]);

          assert.deepEqual(c, a.subtract(b));
        });
      });

      describe('.scale()', function() {
        it('should work as expected', function() {
          var a = new Matrix([[1, 2], [3, 4]]);
          var b = new Matrix([[2, 4], [6, 8]]);

          assert.deepEqual(b, a.scale(2));
        });
      });

      describe('.product(b)', function() {
        it('should work as the static equivalent of a.product(b)', function() {
          var a = new Matrix([[3, 2, 1]]);
          var b = new Matrix([[1, 2, 3]]);
          var c = new Matrix([[3, 4, 3]]);

          assert.deepEqual(c, a.product(b));
        });
      });

      describe('.multiply()', function() {
        it('should throw error if sizes do not match', function() {
          var a = new Matrix([[1, 2], [3, 4]]);
          var b = new Matrix([[1, 2]]);

          assert.throws(a.multiply.bind(a, b), Error);
        });

        it('should work as expected', function() {
          var a = new Matrix([[1, 2]]);
          var b = new Matrix([[1], [2]]);
          var c = new Matrix([[5]]);
          var d = new Matrix([[1, 2], [2, 4]]);

          var e = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
          var f = new Matrix([[ 30,  36,  42], [ 66,  81,  96], [102, 126, 150]]);

          var g = new Matrix([[0,1,0], [1,0,0], [0,0,1]]);
          var h = new Matrix([[1,3,5], [2,4,7], [1,1,0]]);
          var i = new Matrix([[2, 4, 7], [1, 3, 5], [1, 1, 0]]);

          assert.deepEqual(c, a.multiply(b));
          assert.deepEqual(d, b.multiply(a));
          assert.deepEqual(f, e.multiply(e));
          assert.deepEqual(i, g.multiply(h));
        });
      });

      describe('.transpose()', function() {
        var a = new Matrix([[1, 2]]);
        var b = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
        var c = new Matrix([[1], [2]]);
        var d = new Matrix([[1, 4, 7], [2, 5, 8], [3, 6, 9]]);
        var e = new Matrix.random(20, 20);

        it('should work as expected', function() {

          assert.deepEqual(a, c.T);
          assert.deepEqual(c, a.T);

          assert.deepEqual(b, d.T);
          assert.deepEqual(d, b.T);

          assert.deepEqual(e, e.T.T);
        });
      });

      describe('.inverse()', function() {
        it('should throw error if matrix is not square', function() {
          var a = new Matrix([[1, 2]]);

          assert.throws(a.inverse.bind(a), Error);
        });

        it('should throw error if matrix is not invertible', function() {
          var a = new Matrix([
            [1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]
          ]);

          assert.throws(a.inverse.bind(a), Error);
        });

        it('should work as expected', function() {
          var a = new Matrix([
            [2, -1, 0],
            [-1, 2, -1],
            [0, -1, 2]
          ]);
          var b = new Matrix([
            [3/4, 1/2, 1/4],
            [1/2, 1, 1/2],
            [1/4, 1/2, 3/4]
          ]);

          // need to round result to avoid floating point rounding errors, e.g. 0.99999999994
          assert.deepEqual(b, a.inverse().map(function(value) {
            return Number(value.toFixed(2));
          }));
        });
      });

      describe('.gauss()', function() {
        it('should work as expected', function() {
          var a = new Matrix([[1, 2, 3], [3, 4, 5]]);
          var b = new Matrix([[1, 0, -1], [0, 1, 2]]);

          assert.deepEqual(b, a.gauss());

          var c = new Matrix([[1, 2, -1, -4], [2, 3, -1, -11], [-2, 0, -3, 22]]);
          var d = new Matrix([[1, 0, 0, -8], [0, 1, 0, 1], [0, 0, 1, -2]]);

          assert.deepEqual(d, c.gauss());
        });
      });

      describe('.lu()', function() {
        it('should work as expected', function() {
          var a = new Matrix([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);
          var b = [
            new Matrix([[1, 0, 0], [0.5, 1, 0], [0.5, -1, 1]]),
            new Matrix([[2, 4, 7], [0, 1, 1.5], [0, 0, -2]])
          ];

          assert.deepEqual(b, a.lu().splice(0, 2));

          var c = new Matrix([[11, 9, 24, 2], [1, 5, 2, 6], [3, 17, 18, 1], [2, 5, 7, 1]]);
          var d = [
            new Matrix([[1, 0, 0, 0], [0.27273, 1, 0, 0], [0.09091, 0.2875, 1, 0], [0.18182, 0.23125, 0.0036, 1]]),
            new Matrix([[11, 9, 24, 2], [0, 14.54545, 11.45455, 0.45455], [0, 0, -3.475, 5.6875], [0, 0, 0, 0.51079]]),
          ];

          assert.deepEqual(d, c.lu().splice(0, 2).map(function(matrix) {
            return matrix.map(function(value) {
              return Number(value.toFixed(5));
            });
          }));
        });
      });

      describe('.plu()', function() {
        it('should work as expected', function() {
          var a = new Matrix([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);
          var b = new Matrix([[2, 4, 7], [0.5, 1, 1.5], [0.5, -1, -2]]);
          var ipiv = new Int32Array([1, 1, 2]);

          var plu = a.plu();
          assert.deepEqual(ipiv, plu.pop());
          assert.deepEqual(b, plu.pop());
        });
      });

      describe('.lusolve()', function() {
        it('should work as expected', function() {
          var a = new Matrix([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);
          var rhs = new Matrix([[1], [3], [5]]);
          var x = new Matrix([[3.25], [1.75], [-1.5]]);

          var plu = a.plu(),
              lu = plu[0],
              ipiv = plu[1];

          lu.lusolve(rhs, ipiv);
          assert.deepEqual(x, rhs);
        });
      });

      describe('.solve()', function() {
        it('should work as expected', function() {
          var a = new Matrix([[1, 3, 5], [2, 4, 7], [1, 1, 0]]);
          var rhs = new Matrix([[1], [3], [5]]);
          var x = new Matrix([[3.25], [1.75], [-1.5]]);

          assert.deepEqual(x, a.solve(rhs));
        });
      });

      describe('.augment()', function() {
        it('should return current matrix when combined with empty matrix', function() {
          var a = new Matrix([[1, 2], [3, 4]]);

          assert.deepEqual(a, a.augment(new Matrix()));
        });

        it('should work as expected', function() {
          var a = new Matrix([[1, 2], [3, 4]]);
          var b = new Matrix([[5, 6], [7, 8]]);
          var c = new Matrix([[1, 2, 5, 6], [3, 4, 7, 8]]);

          assert.deepEqual(c, a.augment(b));
        });
      });

      describe('.diag()', function() {
        it('should work as expected', function() {
          var a = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
          var b = new Matrix([[1, 2, 3, 4], [5, 6, 7, 8]]);

          assert.deepEqual(new Vector([1, 5, 9]), a.diag());
          assert.deepEqual(new Vector([1, 6]), b.diag());
        });
      });

      describe('.trace()', function() {
        it('should work as expected', function() {
          var a = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
          var b = new Matrix([[1, 2], [3, 4]]);

          assert.equal(15, a.trace());
          assert.equal(5, b.trace());
        });
      });

      describe('.determinant()', function() {
        it('should throw error if matrix is not square', function() {
          var a = new Matrix([[0, 0]]);
          assert.throws(a.determinant.bind(a), Error);
        });

        it('should work as expected', function() {
          var a = new Matrix([[1, 2], [3, 4]]);
          var b = new Matrix([[1, 5, 6], [3.3, 9, 10], [7, 9, 3.2]]);
          var c = new Matrix([[2, -1, 1], [-1, -2, 1], [-1, -1, -1]]);

          assert.equal(-2, Number(a.determinant().toFixed(2)));
          assert.equal(36.2, Number(b.determinant().toFixed(2)));
          assert.equal(7, Number(c.determinant().toFixed(2)));
        });
      });

      describe('.equals()', function() {
        it('should work as expected', function() {
          var a = new Matrix([[1, 2], [3, 4]]),
              b = new Matrix([[3, 4], [1, 2]]);

          assert.equal(true, a.equals(new Matrix([[1, 2], [3, 4]])));
          assert.equal(true, new Matrix().equals(new Matrix()));
          assert.equal(false, a.equals(b));
        });
      });

      describe('.get()', function() {
        it('should throw error if index out of bounds', function() {
          var a = new Matrix([[1, 2], [3, 4]]);

          assert.throws(a.get.bind(a, -1, 0), Error);
          assert.throws(a.get.bind(a, 0, -1), Error);
          assert.throws(a.get.bind(a, 2, 0), Error);
          assert.throws(a.get.bind(a, 0, 2), Error);
        });

        it('should work as expected', function() {
          var a = new Matrix([[1, 2], [3, 4], [5, 6]]);

          assert.equal(1, a.get(0, 0));
          assert.equal(2, a.get(0, 1));
          assert.equal(3, a.get(1, 0));
          assert.equal(4, a.get(1, 1));
          assert.equal(5, a.get(2, 0));
        });
      });

      describe('.set()', function() {
        it('should throw error if index out of bounds', function() {
          var a = new Matrix([[1, 2], [3, 4]]);

          assert.throws(a.set.bind(a, -1, 0), Error);
          assert.throws(a.set.bind(a, 0, -1), Error);
          assert.throws(a.set.bind(a, 2, 0), Error);
          assert.throws(a.set.bind(a, 0, 2), Error);
        });

        it('should work as expected', function() {
          var a = new Matrix([[1, 2], [3, 4]]);
          a.set(0, 0, 0);
          a.set(0, 1, 1);
          a.set(1, 0, 0);
          a.set(1, 1, 1);

          assert.equal(0, a.get(0, 0));
          assert.equal(1, a.get(0, 1));
          assert.equal(0, a.get(1, 0));
          assert.equal(1, a.get(1, 1));
        });
      });

      describe('.swap()', function() {
        it('should throw error if index out of bounds', function() {
          var a = new Matrix([[1, 2], [3, 4]]);

          assert.throws(a.swap.bind(a, -1, 0), Error);
          assert.throws(a.swap.bind(a, 0, -1), Error);
          assert.throws(a.swap.bind(a, 2, 0), Error);
          assert.throws(a.swap.bind(a, 0, 2), Error);
        });

        it('should work as expected', function() {
          var a = new Matrix([[1, 2], [3, 4], [5, 6]]);
          a.swap(0, 1);
          assert.deepEqual(new Matrix([[3, 4], [1, 2], [5, 6]]), a);

          a.swap(0, 2);
          assert.deepEqual(new Matrix([[5, 6], [1, 2], [3, 4]]), a);
        });
      });

      describe('.map()', function() {
        it('should work as expected', function() {
          var a = new Matrix([[1, 2, 3], [4, 5, 6]]);
          var b = a.map(function(element) { return element * 2; });

          assert.deepEqual(new Matrix([[2, 4, 6], [8, 10, 12]]), b);
        });
      });

      describe('.each()', function() {
        it('should work as expected', function() {
          var a = new Matrix([[1, 2], [3, 4]]);
          var b = Matrix.zeros(2, 2);

          a.each(function(value, i, j){
            b.set(i, j, value * j);
          });

          assert.deepEqual(new Matrix([[0, 2], [0, 4]]), b);
        });
      });

      describe('.reduce()', function() {
        it('should work as expected', function() {
          function sum(a, b) {
            return a + b;
          }

          var a = new Matrix([[1, 2, 3]]);
          var b = new Matrix([[1, 2, 3], [4, 5, 6]]);

          assert.deepEqual(6, a.reduce(sum));
          assert.deepEqual(21, b.reduce(sum));
        });
      });

      describe('.rank()', function() {
        it('should work as expected', function() {
          var a = new Matrix([[1, 2, 1], [-2, -3, 1], [3, 5, 0]]);
          var b = new Matrix([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]);
          var c = new Matrix([[1, 1, 1], [2, 2, 2], [3, 3, 3]]);
          var d = new Matrix([[0, 0, 0], [0, 0, 0]]);

          assert.equal(a.rank(), 2);
          assert.equal(b.rank(), 2);
          assert.equal(c.rank(), 1);
          assert.equal(d.rank(), 0);

          assert.equal(a.rank(), Matrix.rank(a));
        });
      });

      describe('.toString()', function() {
        it('should work as expected', function() {
          assert.equal('[[1,2], \n[3,4]]', new Matrix([[1, 2], [3, 4]]).toString());
            assert.equal('[[1,2], \n[3,4], \n[5,6]]', new Matrix([[1, 2], [3, 4], [5, 6]]).toString());
        });
      });

      describe('.toArray()', function() {
        it('should work as expected', function() {
          assert.deepEqual([[1, 2], [3, 4]], new Matrix([[1, 2], [3, 4]]).toArray());
          assert.deepEqual([[1, 2], [3, 4], [5, 6]], new Matrix([[1, 2], [3, 4], [5, 6]]).toArray());
        });
      });
    });
  });
})();
