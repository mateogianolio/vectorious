(function() {
  'use strict';

  var vectorious = require('../vectorious'),
      assert = require('assert'),
      Vector = vectorious.Vector;

  describe('Vector (optimized)', function() {
    describe('Vector.add(a, b)', function() {
      it('should work as the static equivalent of a.add(b)', function() {
        var a = new Vector([1, 1, 1]);
        var b = new Vector([1, 2, 3]);

        assert.deepEqual(new Vector(a).add(b), Vector.add(a, b));
      });
    });

    describe('Vector.subtract(a, b)', function() {
      it('should work as the static equivalent of a.subtract(b)', function() {
        var a = new Vector([2, 3, 4]);
        var b = new Vector([1, 2, 3]);

        assert.deepEqual(new Vector(a).subtract(b), Vector.subtract(a, b));
      });
    });

    describe('Vector.dot(a, b)', function() {
      it('should work as the static equivalent of a.dot(b)', function() {
        var a = new Vector([2, 3, 4]);
        var b = new Vector([1, 2, 3]);

        assert.deepEqual(new Vector(a).dot(b), Vector.dot(a, b));
      });
    });

    describe('Vector.prototype', function() {
      describe('.add()', function() {
        it('should return empty vector if adding two empty vectors', function() {
          var a = new Vector();
          var b = new Vector();

          assert.deepEqual(new Vector(), a.add(b));
        });

        it('should throw error if sizes do not match', function() {
          var a = new Vector([1]);
          var b = new Vector([1, 2]);

          assert.throws(a.add.bind(a, b), Error);
        });

        it('should produce Vector(5, 7, 9) from Vector(1, 2, 3) and Vector(4, 5, 6)', function() {
          var a = new Vector([1, 2, 3]);
          var b = new Vector([4, 5, 6]);
          var c = new Vector([5, 7, 9]);

          assert.deepEqual(c, a.add(b));
        });
      });

      describe('.subtract()', function() {
        it('should return empty vector if subtracting two empty vectors', function() {
          var a = new Vector();
          var b = new Vector();

          assert.deepEqual(new Vector(), a.subtract(b));
        });

        it('should throw error if sizes do not match', function() {
          var a = new Vector([1]);
          var b = new Vector([1, 2]);

          assert.throws(a.subtract.bind(a, b), Error);
        });

        it('should produce Vector(-3, -3, -3) from Vector(1, 2, 3) and Vector(4, 5, 6)', function() {
          var a = new Vector([1, 2, 3]);
          var b = new Vector([4, 5, 6]);
          var c = new Vector([-3, -3, -3]);

          assert.deepEqual(c, a.subtract(b));
        });
      });

      describe('.scale()', function() {
        it('should scale Vector(1, 2, 3) by 2 to Vector(2, 4, 6)', function() {
          var a = new Vector([1, 2, 3]);
          var b = new Vector([2, 4, 6]);

          assert.deepEqual(b, a.scale(2));
        });
      });

      describe('.normalize()', function() {
        it('should work as expected', function() {
          var a = new Vector([1, 1]);
          var b = new Vector([1 / Math.sqrt(2), 1 / Math.sqrt(2)]);

          assert.deepEqual(b, a.normalize());
        });
      });

      describe('.dot()', function() {
        it('should throw error if sizes do not match', function() {
          var a = new Vector([1]);
          var b = new Vector([1, 2]);

          assert.throws(a.dot.bind(a, b), Error);
        });

        it('should work as expected', function() {
          var a = new Vector([1, 2, 3]);
          var b = new Vector([4, 5, 6]);

          assert.equal(32, a.dot(b));
        });
      });

      describe('.magnitude()', function() {
        it('should return 0 if empty vector', function() {
          assert.equal(0, new Vector().magnitude());
        });

        it('should work as expected', function() {
          assert.equal(4, new Vector([1, 1, 1, 2, 3]).magnitude());
        });
      });

      describe('.max()', function() {
        it('should find the maximum number in vectors', function() {
          var a = new Vector([1, 2, 3]);
          var b = new Vector([3, -1, 1]);
          var c = new Vector([2, 5, 1]);

          assert.equal(3, a.max());
          assert.equal(3, b.max());
          assert.equal(5, c.max());
        });
      });
    });
  });
})();
