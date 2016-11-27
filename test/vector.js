(function() {
  'use strict';

  var assert = require('assert'),
      Vector = require('../vector');

  describe('Vector', function() {
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

    describe('Vector.scale(a, scalar)', function() {
      it('should work as the static equivalent of a.scale(scalar)', function() {
        var a = new Vector([2, 3, 4]);

        assert.deepEqual(new Vector(a).scale(5), Vector.scale(a, 5));
      });
    });

    describe('Vector.angle(a, b)', function() {
      it('should work as the static equivalent of a.angle(b)', function() {
        var a = new Vector([0, 1, 0]);
        var b = new Vector([1, 0, 1]);

        assert.deepEqual(new Vector(a).angle(b), Vector.angle(a, b));
      });
    });

    describe('Vector.equals(a, b)', function() {
      it('should work as the static equivalent of a.equals(b)', function() {
        var a = new Vector([0, 1, 0]);
        var b = new Vector([1, 0, 1]);

        assert.deepEqual(new Vector(a).equals(b), Vector.equals(a, b));
      });
    });

    describe('Vector.combine(a, b)', function() {
      it('should work as the static equivalent of a.combine(b)', function() {
        var a = new Vector([0, 1, 0]);
        var b = new Vector([1, 0, 1]);

        assert.deepEqual(new Vector(a).combine(b), Vector.combine(a, b));
      });
    });

    describe('Vector.zeros()', function() {
      it('should throw error if argument < 0', function() {
        assert.throws(Vector.zeros.bind(new Vector(), -1), Error);
      });

      it('should return empty vector if argument === 0', function() {
        assert.deepEqual(new Vector(), Vector.zeros(0));
      });

      it('should create Vector(0, 0, 0)', function() {
        assert.deepEqual(new Vector([0, 0, 0]), Vector.zeros(3));
      });
    });

    describe('Vector.ones()', function() {
      it('should throw error if argument < 0', function() {
        assert.throws(Vector.ones.bind(new Vector(), -1), Error);
      });

      it('should return empty vector if argument === 0', function() {
        assert.deepEqual(new Vector(), Vector.ones(0));
      });

      it('should create Vector(1, 1, 1)', function() {
        assert.deepEqual(new Vector([1, 1, 1]), Vector.ones(3));
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

      describe('.project()', function() {
        it('should throw error if sizes do not match', function() {
          var a = new Vector([1]);
          var b = new Vector([1, 2]);

          assert.throws(a.project.bind(a, b), Error);
        });

        it('should work as expected', function() {
          var a = new Vector([2, 1]);
          var b = new Vector([-3, 4]);
          var c = new Vector([6 / 25, -8 / 25]);

          assert.deepEqual(c, a.project(b));
        });
      });

      describe('.range()', function() {
        it('should throw error if wrong number or arguments supplied', function() {
          assert.throws(Vector.range.bind(new Vector(), 1), Error);
          assert.throws(Vector.range.bind(new Vector(), 1, 2, 3, 4), Error);
        });

        it('should throw error if step > start - end', function() {
          assert.throws(Vector.range.bind(new Vector(), 0, 0), Error);
          assert.throws(Vector.range.bind(new Vector(), 1, 3, 2), Error);
        });

        it('should work as expected', function() {
          var a = Vector.range(0, 5);
          var b = Vector.range(5, 2, 10);
          var c = Vector.range(5, 0);
          var d = Vector.range(5, 2, 0);

          assert.deepEqual(new Vector([0, 1, 2, 3, 4]), a);
          assert.deepEqual(new Vector([5, 7, 9]), b);
          assert.deepEqual(new Vector([5, 4, 3, 2, 1]), c);
          assert.deepEqual(new Vector([5, 3, 1]), d);
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

      describe('.angle()', function() {
        it('should work as expected', function() {
          var a = new Vector([1, 0]);
          var b = new Vector([0, 1]);

          assert.equal(Math.PI / 2, a.angle(b));
        });
      });

      describe('.equals()', function() {
        it('should work as expected', function() {
          assert.equal(true, new Vector([1, 3, 2]).equals(new Vector([1, 3, 2])));
          assert.equal(true, new Vector().equals(new Vector()));
          assert.equal(false, new Vector([1, 2, 3]).equals(new Vector([1, 3, 2])));
        });
      });

      describe('.get()', function() {
        it('should throw error if index out of bounds', function() {
          var a = new Vector([1, 2, 3]);
          assert.throws(a.get.bind(a, -1), Error);
          assert.throws(a.get.bind(a, 3), Error);
        });

        it('should work as expected', function() {
          var a = new Vector([1, 3, 2, 4]);
          assert.equal(1, a.get(0));
          assert.equal(3, a.get(1));
          assert.equal(2, a.get(2));
          assert.equal(4, a.get(3));
        });
      });

      describe('.x, .y, .z, .w', function() {
        it('should retrieve properties as expected', function() {
          var a = new Vector([1,2,3,4,5]);

          assert.equal(a.x, 1)
          assert.equal(a.y, 2)
          assert.equal(a.z, 3)
          assert.equal(a.w, 4)
        });

        it('should set proeprties as expected', function() {
          var a = new Vector([-1,-1,-1,-1]);

          a.x = 0;
          a.y = 1;
          a.z = 2;
          a.w = 3;

          assert.equal(a.get(0), 0);
          assert.equal(a.get(1), 1);
          assert.equal(a.get(2), 2);
          assert.equal(a.get(3), 3);

        })
      })

      describe('.min()', function() {
        it('should find the minimum number in vectors', function() {
          var a = new Vector([1, 2, 3]);
          var b = new Vector([3, -1, 1]);
          var c = new Vector([2, 5, 1]);

          assert.equal(1, a.min());
          assert.equal(-1, b.min());
          assert.equal(1, c.min());
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

      describe('.set()', function() {
        it('should throw error if index out of bounds', function() {
          var a = new Vector([1, 2]);
          assert.throws(a.set.bind(a, -1, 0), Error);
          assert.throws(a.set.bind(a, 2, 0), Error);
        });

        it('should work as expected', function() {
          var a = new Vector([1, 2]);
          a.set(0, 0);
          a.set(1, 1);
          assert.equal(0, a.get(0));
          assert.equal(1, a.get(1));
        });
      });

      describe('.combine()', function() {
        it('should return current vector if combined with empty vector', function() {
          assert.deepEqual(new Vector([1, 2, 3]), new Vector([1, 2, 3]).combine(new Vector()));
        });

        it('should work as expected', function() {
          assert.deepEqual(new Vector([1, 2, 3, 0, 1]), new Vector([1, 2, 3]).combine(new Vector([0, 1])));
        });
      });

      describe('.push()', function() {
        it('should start with Vector(1, 2), push(3) to get Vector(1, 2, 3)', function() {
          assert.deepEqual(new Vector([1, 2, 3]), new Vector([1, 2]).push(3));
        });
      });

      describe('.map()', function() {
        it('should work as expected', function() {
          var a = new Vector([1, 2, 3]);
          var b = a.map(function(value) { return value * value; });

          assert.deepEqual(new Vector([1, 4, 9]), b);
        });
      });

      describe('.each()', function() {
        it('should work as expected', function() {
          var a = new Vector([1, 2, 3]);
          var b = new Vector();
          a.each(function(value, index) {
            b.push(value * index);
          });

          assert.deepEqual(new Vector([0, 2, 6]), b);
        });
      });

      describe('.reduce()', function() {
        it('should work as expected', function() {
          function sum(a, b) {
            return a + b;
          }

          var a = new Vector([1, 2, 3]);
          var b = new Vector([1, 2, 3, 4, 5, 6]);

          assert.deepEqual(6, a.reduce(sum));
          assert.deepEqual(21, b.reduce(sum));
        });
      });

      describe('.toString()', function() {
        it('should work as expected', function() {
          assert.equal('[1, 2, 3]', new Vector([1, 2, 3]).toString());
        });
      });

      describe('.toArray()', function() {
        it('should work as expected', function() {
          assert.deepEqual([1, 2, 3], new Vector([1, 2, 3]).toArray());
        });
      });
    });
  });
})();
