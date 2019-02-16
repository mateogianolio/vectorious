import NDArray from './NDArray';
import * as assert from 'assert';

describe('NDArray', () => {
  describe('constructor()', () => {
    it('should work with no arguments', () => {
      var ndarray = new NDArray();
      assert(ndarray);
    });

    it('should work with typed array and no shape argument', () => {
      const f64 = new Float64Array([1, 2, 3]);
      var ndarray = new NDArray(f64);

      assert.deepEqual(ndarray.data, f64);
      assert.deepEqual(ndarray.shape, [f64.length]);
      assert.deepEqual(ndarray.length, f64.length);
      assert.deepEqual(ndarray.type, f64.constructor);
    });

    it('should work with typed array shape argument', () => {
      const f64 = new Float64Array([1, 2, 3, 4]);
      var ndarray = new NDArray(f64, { shape: [2, 2] });

      assert.deepEqual(ndarray.data, f64);
      assert.deepEqual(ndarray.shape, [2, 2]);
      assert.deepEqual(ndarray.length, f64.length);
      assert.deepEqual(ndarray.type, f64.constructor);
    });
  });

  describe('reshape()', () => {
    it('should throw error if new shape does not match length', () => {
      const f64 = new Float64Array([1, 2, 3, 4]);
      var ndarray = new NDArray(f64);

      assert.throws(ndarray.reshape.bind(ndarray, [1, 2]), Error);
    });

    it('should be able to create row vector of column vector', () => {
      const f64 = new Float64Array([1, 2, 3, 4]);
      var ndarray = new NDArray(f64, { shape: [1, 4] });

      assert.deepEqual(ndarray.shape, [1, 4]);

      console.log(ndarray);

      ndarray.reshape([4, 1]);

      console.log(ndarray);

      assert.deepEqual(ndarray.shape, [4, 1]);
    });
  });
});
