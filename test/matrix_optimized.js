(function() {
  'use strict';

  var vectorious = require('../vectorious'),
      assert = require('assert'),
      Matrix = vectorious.Matrix,
      Vector = vectorious.Vector;

  describe('Matrix (optimized)', function() {
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

    describe('Matrix.multiply(a, b)', function() {
      it('should work as the static equivalent of a.multiply(b)', function() {
        var a = new Matrix([[1], [2], [3]]);
        var b = new Matrix([[1, 1, 1]]);

        assert.deepEqual(new Matrix(a).multiply(b), Matrix.multiply(a, b));
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
    });
  });
})();
