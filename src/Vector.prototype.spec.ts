import { Vector } from './';
import * as assert from 'assert';

describe('Vector.prototype', () => {
  describe('constructor()', () => {
    it('should work with length', () => {
      const a = new Vector(2);
      assert(a);
    });
  });

  describe('.binOp()', () => {
    it('should work as expected', () => {
      const a = new Vector([1, 1, 1]);
      const b = new Vector([1, 2, 3]);
      const c = new Vector([2, 3, 4]);
      const f = (a: number, b: number): number => a + b;

      assert.deepEqual(a.binOp(b, f), c);
    });

    it('should throw error when sizes do not match', () => {
      const a = new Vector([1, 1, 1]);
      const b = new Vector([1, 2, 3, 4]);
      const f = (a: number, b: number): number => a + b;

      assert.throws(a.binOp.bind(a, b, f), Error);
    });
  });

  describe('.normalize()', () => {
    it('should work as expected', () => {
      const a = new Vector([1, 1]);
      const b = new Vector([1 / Math.sqrt(2), 1 / Math.sqrt(2)]);

      assert.deepEqual(b, a.normalize());
    });
  });

  describe('.project()', () => {
    it('should throw error if sizes do not match', () => {
      const a = new Vector([1]);
      const b = new Vector([1, 2]);

      assert.throws(a.project.bind(a, b), Error);
    });

    it('should work as expected', () => {
      const a = new Vector([2, 1]);
      const b = new Vector([-3, 4]);
      const c = new Vector([6 / 25, -8 / 25]);

      assert.deepEqual(c, a.project(b));
    });
  });

  describe('.magnitude()', () => {
    it('should return 0 if empty vector', () => {
      assert.equal(0, new Vector().magnitude());
    });

    it('should work as expected', () => {
      assert.equal(4, new Vector([1, 1, 1, 2, 3]).magnitude());
    });
  });

  describe('.angle()', () => {
    it('should work as expected', () => {
      const a = new Vector([1, 0]);
      const b = new Vector([0, 1]);

      assert.equal(Math.PI / 2, a.angle(b));
    });
  });

  describe('.get()', () => {
    it('should throw error if index out of bounds', () => {
      const a = new Vector([1, 2, 3]);
      assert.throws(a.get.bind(a, -1), Error);
      assert.throws(a.get.bind(a, 3), Error);
    });

    it('should work as expected', () => {
      const a = new Vector([1, 3, 2, 4]);
      assert.equal(1, a.get(0));
      assert.equal(3, a.get(1));
      assert.equal(2, a.get(2));
      assert.equal(4, a.get(3));
    });
  });

  describe('.x, .y, .z, .w', () => {
    it('should retrieve properties as expected', () => {
      const a = new Vector([1,2,3,4,5]);

      assert.equal(a.x, 1)
      assert.equal(a.y, 2)
      assert.equal(a.z, 3)
      assert.equal(a.w, 4)
    });

    it('should set proeprties as expected', () => {
      const a = new Vector([-1,-1,-1,-1]);

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

  describe('.set()', () => {
    it('should throw error if index out of bounds', () => {
      const a = new Vector([1, 2]);
      assert.throws(a.set.bind(a, -1, 0), Error);
      assert.throws(a.set.bind(a, 2, 0), Error);
    });

    it('should work as expected', () => {
      const a = new Vector([1, 2]);
      a.set(0, 0);
      a.set(1, 1);
      assert.equal(0, a.get(0));
      assert.equal(1, a.get(1));
    });
  });

  describe('.combine()', () => {
    it('should return current vector if combined with empty vector', () => {
      assert.deepEqual(new Vector([1, 2, 3]), new Vector([1, 2, 3]).combine(new Vector()));
    });

    it('should work as expected', () => {
      assert.deepEqual(new Vector([1, 2, 3, 0, 1]), new Vector([1, 2, 3]).combine(new Vector([0, 1])));
    });
  });

  describe('.push()', () => {
    it('should start with Vector(1, 2), push(3) to get Vector(1, 2, 3)', () => {
      assert.deepEqual(new Vector([1, 2, 3]), new Vector([1, 2]).push(3));
    });
  });

  describe('.map()', () => {
    it('should work as expected', () => {
      const a = new Vector([1, 2, 3]);
      const b = a.map(value => value * value);

      assert.deepEqual(new Vector([1, 4, 9]), b);
    });
  });

  describe('.each()', () => {
    it('should work as expected', () => {
      const a = new Vector([1, 2, 3]);
      const b = new Vector();
      a.each((value, index) => {
        b.push(value * index);
      });

      assert.deepEqual(new Vector([0, 2, 6]), b);
    });
  });

  describe('.reduce()', () => {
    it('should work as expected', () => {
      function sum(a: number, b: number) {
        return a + b;
      }

      const a = new Vector([1, 2, 3]);
      const b = new Vector([1, 2, 3, 4, 5, 6]);

      assert.deepEqual(6, a.reduce(sum, 0));
      assert.deepEqual(21, b.reduce(sum));
    });

    it('should throw error if empty vector with no initial value', () => {
      const a = new Vector();
      const f = (acc: number, value: number): number => acc + value;
      assert.throws(a.reduce.bind(a, f), Error);
    })
  });

  describe('.toString()', () => {
    it('should work as expected', () => {
      assert.equal('[1, 2, 3]', new Vector([1, 2, 3]).toString());
    });
  });

  describe('.toArray()', () => {
    it('should work as expected', () => {
      assert.deepEqual([], new Vector().toArray());
      assert.deepEqual([1, 2, 3], new Vector([1, 2, 3]).toArray());
    });
  });

  describe('.cross()', () => {
    it('should work as expected', () => {
      const a = new Vector([1, 2, 3]);
      const b = new Vector([2, 3, 4]);
      assert.deepEqual(new Vector([-1, 2, -1]), a.cross(b));
    });

    it('should throw an exception when lengths do not match', () => {
      const a = new Vector([1, 2, 3, 4]);
      const b = new Vector([5, 6, 7]);
      assert.throws(a.cross.bind(a, b), Error);
    });
  });

  describe('.check()', () => {
    it('should throw error if Matrix contains NaN', () => {
      let a = new Vector([1, NaN, 3, 4]);

      assert.throws(a.check.bind(a), Error);
    });
  });
});
