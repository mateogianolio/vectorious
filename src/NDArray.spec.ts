import NDArray from './NDArray';
import * as assert from 'assert';

describe('NDArray.prototype', () => {
  describe('constructor()', () => {
    it('should work with no arguments', () => {
      const ndarray = new NDArray();
      assert(ndarray);
    });

    it('should work with typed array and no shape argument', () => {
      const f64 = new Float64Array([1, 2, 3]);
      const ndarray = new NDArray(f64);

      assert.deepEqual(ndarray.data, f64);
      assert.deepEqual(ndarray.shape, [f64.length]);
      assert.deepEqual(ndarray.length, f64.length);
      assert.deepEqual(ndarray.type, f64.constructor);
    });

    it('should work with typed array shape argument', () => {
      const f64 = new Float64Array([1, 2, 3, 4]);
      const ndarray = new NDArray(f64, { shape: [2, 2] });

      assert.deepEqual(ndarray.data, f64);
      assert.deepEqual(ndarray.shape, [2, 2]);
      assert.deepEqual(ndarray.length, f64.length);
      assert.deepEqual(ndarray.type, f64.constructor);
    });

    it('should work with array', () => {
      const f64 = new Float64Array([1, 2, 3, 4]);
      const ndarray = new NDArray([1, 2, 3, 4]);

      assert.deepEqual(ndarray.data, f64);
      assert.deepEqual(ndarray.shape, [4]);
      assert.deepEqual(ndarray.length, f64.length);
      assert.deepEqual(ndarray.type, f64.constructor);
    });

    it('should work with two dimensional array', () => {
      const f64 = new Float64Array([1, 2, 3, 4]);
      const ndarray = new NDArray([[1, 2], [3, 4]]);

      assert.deepEqual(ndarray.data, f64);
      assert.deepEqual(ndarray.shape, [2, 2]);
      assert.deepEqual(ndarray.length, f64.length);
      assert.deepEqual(ndarray.type, f64.constructor);
    });

    it('should work with multidimensional array', () => {
      const f64 = new Float64Array([1, 2, 3, 4]);
      const ndarray = new NDArray([[[1], [2]], [[3], [4]]]);

      assert.deepEqual(ndarray.data, f64);
      assert.deepEqual(ndarray.shape, [2, 2, 1]);
      assert.deepEqual(ndarray.length, f64.length);
      assert.deepEqual(ndarray.type, f64.constructor);
    });
  });

  describe('reshape()', () => {
    it('should throw error if new shape does not match length', () => {
      const f64 = new Float64Array([1, 2, 3, 4]);
      const ndarray = new NDArray(f64);

      assert.throws(ndarray.reshape.bind(ndarray, [1, 2]), Error);
    });

    it('should be able to create row vector of column vector', () => {
      const f64 = new Float64Array([1, 2, 3, 4]);
      const ndarray = new NDArray(f64, { shape: [1, 4] });

      assert.deepEqual(ndarray.shape, [1, 4]);
      ndarray.reshape([4, 1]);
      assert.deepEqual(ndarray.shape, [4, 1]);
    });
  });

  describe('copy()', () => {
    it('should create an immutable copy of class', () => {
      const f64 = new Float64Array([1, 2, 3, 4]);
      const original = new NDArray(f64);
      const copy = original.copy();

      assert(original !== copy);
      assert(original.data !== copy.data);
      assert.deepEqual(original, copy);
    });
  });

  describe('equilateral()', () => {
    it('should pass if lengths match', () => {
      const f64x = new Float64Array([1, 2, 3, 4]);
      const f64y = new Float64Array([1, 2, 3, 4]);
      const x = new NDArray(f64x);
      const y = new NDArray(f64y);

      x.equilateral(y);
    });

    it('should throw error if lengths do not match', () => {
      const f64x = new Float64Array([1, 2, 3, 4]);
      const f64y = new Float64Array([1, 2, 3, 4, 5]);
      const x = new NDArray(f64x);
      const y = new NDArray(f64y);

      assert.throws(x.equilateral.bind(x, y), Error);
    });
  });

  describe('equidimensional()', () => {
    it('should pass if shapes match', () => {
      const f64x = new Float64Array([1, 2, 3, 4]);
      const f64y = new Float64Array([1, 2, 3, 4]);
      const x = new NDArray(f64x);
      const y = new NDArray(f64y);

      x.equidimensional(y);
    });

    it('should throw error if lengths do not match', () => {
      const f64x = new Float64Array([1, 2, 3, 4]);
      const f64y = new Float64Array([1, 2, 3, 4]);
      const x = new NDArray(f64x);
      const y = new NDArray(f64y, { shape: [2, 2] });

      assert.throws(x.equidimensional.bind(x, y), Error);
    });
  });

  describe('add()', () => {
    it('should return empty vector if adding two empty vectors', () => {
      const a = new NDArray();
      const b = new NDArray();

      assert.deepEqual(new NDArray(), a.add(b));
    });

    it('should throw error if sizes do not match', () => {
      const a = new NDArray([1]);
      const b = new NDArray([1, 2]);

      assert.throws(a.add.bind(a, b), Error);
    });

    it('should produce NDArray([5, 7, 9]) from NDArray([1, 2, 3]) and NDArray([4, 5, 6])', () => {
      const a = new NDArray([1, 2, 3]);
      const b = new NDArray([4, 5, 6]);
      const c = new NDArray([5, 7, 9]);

      assert.deepEqual(c, a.add(b));
    });
  });

  describe('subtract()', () => {
    it('should return empty vector if subtracting two empty vectors', () => {
      const a = new NDArray();
      const b = new NDArray();

      assert.deepEqual(new NDArray(), a.subtract(b));
    });

    it('should throw error if sizes do not match', () => {
      const a = new NDArray([1]);
      const b = new NDArray([1, 2]);

      assert.throws(a.subtract.bind(a, b), Error);
    });

    it('should produce NDArray(-3, -3, -3) from NDArray(1, 2, 3) and NDArray(4, 5, 6)', () => {
      const a = new NDArray([1, 2, 3]);
      const b = new NDArray([4, 5, 6]);
      const c = new NDArray([-3, -3, -3]);

      assert.deepEqual(c, a.subtract(b));
    });
  });

  describe('scale()', () => {
    it('should scale NDArray(1, 2, 3) by 2 to NDArray(2, 4, 6)', () => {
      const a = new NDArray([1, 2, 3]);
      const b = new NDArray([2, 4, 6]);

      assert.deepEqual(b, a.scale(2));
    });
  });

  describe('dot()', () => {
    it('should throw error if sizes do not match', () => {
      const a = new NDArray([1]);
      const b = new NDArray([1, 2]);

      assert.throws(a.dot.bind(a, b), Error);
    });

    it('should work as expected', () => {
      const a = new NDArray([1, 2, 3]);
      const b = new NDArray([4, 5, 6]);

      assert.equal(32, a.dot(b));
    });
  });

  describe('equals()', () => {
    it('should work as expected', () => {
      assert.equal(true, new NDArray([1, 3, 2]).equals(new NDArray([1, 3, 2])));
      assert.equal(true, new NDArray().equals(new NDArray()));
      assert.equal(false, new NDArray([1, 2, 3]).equals(new NDArray([1, 3, 2])));
    });
  });

  describe('min()', () => {
    it('should find the minimum number in arrays', () => {
      const a = new NDArray([1, 2, 3]);
      const b = new NDArray([3, -1, 1]);
      const c = new NDArray([2, 5, 1]);

      assert.equal(1, a.min());
      assert.equal(-1, b.min());
      assert.equal(1, c.min());
    });
  });

  describe('max()', () => {
    it('should find the maximum number in arrays', () => {
      const a = new NDArray([1, 2, 3]);
      const b = new NDArray([3, -1, 1]);
      const c = new NDArray([2, 5, 1]);

      assert.equal(3, a.max());
      assert.equal(3, b.max());
      assert.equal(5, c.max());
    });
  });

  describe('product()', () => {
    it('should work as the static equivalent of a.product(b)', () => {
      const a = new NDArray([[3, 2, 1]]);
      const b = new NDArray([[1, 2, 3]]);
      const c = new NDArray([[3, 4, 3]]);

      assert.deepEqual(c, a.product(b));
    });
  });
});
