import NDArray from './NDArray';
import * as assert from 'assert';

describe('NDArray', () => {
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

  describe('dimensional()', () => {
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
});
