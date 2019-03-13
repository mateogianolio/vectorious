import * as assert from 'assert';

import { NDArray } from './NDArray';

describe('NDArray.prototype', () => {
  describe('constructor()', () => {
    it('should work with no arguments', () => {
      const x: NDArray = new NDArray();
      assert(x);
    });

    it('should work with typed array and no shape argument', () => {
      const f64: Float64Array = new Float64Array([1, 2, 3]);
      const x: NDArray = new NDArray(f64);

      assert.deepStrictEqual(x.data, f64);
      assert.deepStrictEqual(x.shape, [f64.length]);
      assert.deepStrictEqual(x.length, f64.length);
      assert.deepStrictEqual(x.type, f64.constructor);
    });

    it('should work with typed array shape argument', () => {
      const f64: Float64Array = new Float64Array([1, 2, 3, 4]);
      const x: NDArray = new NDArray(f64, { shape: [2, 2] });

      assert.deepStrictEqual(x.data, f64);
      assert.deepStrictEqual(x.shape, [2, 2]);
      assert.deepStrictEqual(x.length, f64.length);
      assert.deepStrictEqual(x.type, f64.constructor);
    });

    it('should work with array', () => {
      const f64: Float64Array = new Float64Array([1, 2, 3, 4]);
      const x: NDArray = new NDArray([1, 2, 3, 4]);

      assert.deepStrictEqual(x.data, f64);
      assert.deepStrictEqual(x.shape, [4]);
      assert.deepStrictEqual(x.length, f64.length);
      assert.deepStrictEqual(x.type, f64.constructor);
    });

    it('should work with two dimensional array', () => {
      const f64: Float64Array = new Float64Array([1, 2, 3, 4]);
      const x: NDArray = new NDArray([[1, 2], [3, 4]]);

      assert.deepStrictEqual(x.data, f64);
      assert.deepStrictEqual(x.shape, [2, 2]);
      assert.deepStrictEqual(x.length, f64.length);
      assert.deepStrictEqual(x.type, f64.constructor);
    });

    it('should work with multidimensional array', () => {
      const f64: Float64Array = new Float64Array([1, 2, 3, 4]);
      const x: NDArray = new NDArray([[[1], [2]], [[3], [4]]]);

      assert.deepStrictEqual(x.data, f64);
      assert.deepStrictEqual(x.shape, [2, 2, 1]);
      assert.deepStrictEqual(x.length, f64.length);
      assert.deepStrictEqual(x.type, f64.constructor);
    });

    it('should work with NDArray', () => {
      const x: NDArray = new NDArray([1, 2, 3, 4]);
      assert.deepStrictEqual(x, new NDArray(x));
    });
  });

  describe('reshape()', () => {
    it('should throw error if new shape does not match length', () => {
      const f64: Float64Array = new Float64Array([1, 2, 3, 4]);
      const x: NDArray = new NDArray(f64);

      assert.throws(x.reshape.bind(x, [1, 2]) as () => void, Error);
    });

    it('should be able to create row vector of column vector', () => {
      const f64: Float64Array = new Float64Array([1, 2, 3, 4]);
      const x: NDArray = new NDArray(f64, { shape: [1, 4] });

      assert.deepStrictEqual(x.shape, [1, 4]);
      x.reshape([4, 1]);
      assert.deepStrictEqual(x.shape, [4, 1]);
    });
  });

  describe('copy()', () => {
    it('should create an immutable copy of class', () => {
      const f64: Float64Array = new Float64Array([1, 2, 3, 4]);
      const original: NDArray = new NDArray(f64);
      const copy: NDArray = original.copy();

      assert(original !== copy);
      assert(original.data !== copy.data);
      assert.deepStrictEqual(original, copy);
    });
  });

  describe('equilateral()', () => {
    it('should pass if lengths match', () => {
      const f64x: Float64Array = new Float64Array([1, 2, 3, 4]);
      const f64y: Float64Array = new Float64Array([1, 2, 3, 4]);
      const x: NDArray = new NDArray(f64x);
      const y: NDArray = new NDArray(f64y);

      x.equilateral(y);
    });

    it('should throw error if lengths do not match', () => {
      const f64x: Float64Array = new Float64Array([1, 2, 3, 4]);
      const f64y: Float64Array = new Float64Array([1, 2, 3, 4, 5]);
      const x: NDArray = new NDArray(f64x);
      const y: NDArray = new NDArray(f64y);

      assert.throws(x.equilateral.bind(x, y) as () => void, Error);
    });
  });

  describe('equidimensional()', () => {
    it('should pass if shapes match', () => {
      const f64x: Float64Array = new Float64Array([1, 2, 3, 4]);
      const f64y: Float64Array = new Float64Array([1, 2, 3, 4]);
      const x: NDArray = new NDArray(f64x);
      const y: NDArray = new NDArray(f64y);

      x.equidimensional(y);
    });

    it('should throw error if lengths do not match', () => {
      const f64x: Float64Array = new Float64Array([1, 2, 3, 4]);
      const f64y: Float64Array = new Float64Array([1, 2, 3, 4]);
      const x: NDArray = new NDArray(f64x);
      const y: NDArray = new NDArray(f64y, { shape: [2, 2] });

      assert.throws(x.equidimensional.bind(x, y) as () => void, Error);
    });
  });

  describe('add()', () => {
    it('should return empty vector if adding two empty vectors', () => {
      const x: NDArray = new NDArray();
      const y: NDArray = new NDArray();

      assert.deepStrictEqual(new NDArray(), x.add(y));
    });

    it('should throw error if sizes do not match', () => {
      const x: NDArray = new NDArray([1]);
      const y: NDArray = new NDArray([1, 2]);

      assert.throws(x.add.bind(x, y) as () => void, Error);
    });

    it('should produce NDArray([5, 7, 9]) from NDArray([1, 2, 3]) and NDArray([4, 5, 6])', () => {
      const x: NDArray = new NDArray([1, 2, 3]);
      const y: NDArray = new NDArray([4, 5, 6]);
      const z: NDArray = new NDArray([5, 7, 9]);

      assert.deepStrictEqual(z, x.add(y));
    });
  });

  describe('subtract()', () => {
    it('should return empty vector if subtracting two empty vectors', () => {
      const x: NDArray = new NDArray();
      const y: NDArray = new NDArray();

      assert.deepStrictEqual(new NDArray(), x.subtract(y));
    });

    it('should throw error if sizes do not match', () => {
      const x: NDArray = new NDArray([1]);
      const y: NDArray = new NDArray([1, 2]);

      assert.throws(x.subtract.bind(x, y) as () => void, Error);
    });

    it('should produce NDArray(-3, -3, -3) from NDArray(1, 2, 3) and NDArray(4, 5, 6)', () => {
      const x: NDArray = new NDArray([1, 2, 3]);
      const y: NDArray = new NDArray([4, 5, 6]);
      const z: NDArray = new NDArray([-3, -3, -3]);

      assert.deepStrictEqual(z, x.subtract(y));
    });
  });

  describe('scale()', () => {
    it('should scale NDArray(1, 2, 3) by 2 to NDArray(2, 4, 6)', () => {
      const x: NDArray = new NDArray([1, 2, 3]);
      const y: NDArray = new NDArray([2, 4, 6]);

      assert.deepStrictEqual(y, x.scale(2));
    });
  });

  describe('dot()', () => {
    it('should throw error if sizes do not match', () => {
      const x: NDArray = new NDArray([1]);
      const y: NDArray = new NDArray([1, 2]);

      assert.throws(x.dot.bind(x, y) as () => void, Error);
    });

    it('should work as expected', () => {
      const x: NDArray = new NDArray([1, 2, 3]);
      const y: NDArray = new NDArray([4, 5, 6]);

      assert.strictEqual(32, x.dot(y));
    });
  });

  describe('equals()', () => {
    it('should work as expected', () => {
      assert.strictEqual(true, new NDArray([1, 3, 2]).equals(new NDArray([1, 3, 2])));
      assert.strictEqual(true, new NDArray().equals(new NDArray()));
      assert.strictEqual(false, new NDArray([1, 2, 3]).equals(new NDArray([1, 3, 2])));
    });
  });

  describe('min()', () => {
    it('should find the minimum number in arrays', () => {
      const x: NDArray = new NDArray([1, 2, 3]);
      const y: NDArray = new NDArray([3, -1, 1]);
      const z: NDArray = new NDArray([2, 5, 1]);

      assert.strictEqual(1, x.min());
      assert.strictEqual(-1, y.min());
      assert.strictEqual(1, z.min());
    });
  });

  describe('max()', () => {
    it('should find the maximum number in arrays', () => {
      const x: NDArray = new NDArray([1, 2, 3]);
      const y: NDArray = new NDArray([3, -1, 1]);
      const z: NDArray = new NDArray([2, 5, 1]);

      assert.strictEqual(3, x.max());
      assert.strictEqual(3, y.max());
      assert.strictEqual(5, z.max());
    });
  });

  describe('product()', () => {
    it('should work as the static equivalent of a.product(b)', () => {
      const x: NDArray = new NDArray([[3, 2, 1]]);
      const y: NDArray = new NDArray([[1, 2, 3]]);
      const z: NDArray = new NDArray([[3, 4, 3]]);

      assert.deepStrictEqual(z, x.product(y));
    });
  });
});
