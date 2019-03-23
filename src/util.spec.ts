import {
  deepStrictEqual,
  strictEqual,
} from 'assert';

import {
  flatten,
  isTypedArray,
  shape,
  type,
} from './util';

describe('util', () => {
  describe('flatten', () => {
    it('should work as expected', () => {
      const x: number[] = [1, 2, 3];
      const y: number[][] = [[1], [2], [3]];
      const z: number[][][] = [[[1]], [[2]], [[3]]];

      deepStrictEqual(flatten(x), x);
      deepStrictEqual(flatten(y), x);
      deepStrictEqual(flatten(z), x);
    });
  });

  describe('shape', () => {
    it('should work as expected', () => {
      const x: number[] = [1, 2, 3];
      const y: number[][] = [[1], [2], [3]];
      const z: number[][][] = [[[1]], [[2]], [[3]]];

      deepStrictEqual(shape(x), [3]);
      deepStrictEqual(shape(y), [3, 1]);
      deepStrictEqual(shape(z), [3, 1, 1]);
    });
  });

  describe('type', () => {
    it('should work as expected', () => {
      deepStrictEqual(type(new Int8Array()), Int8Array);
      deepStrictEqual(type(new Uint8Array()), Uint8Array);
      deepStrictEqual(type(new Int16Array()), Int16Array);
      deepStrictEqual(type(new Uint16Array()), Uint16Array);
      deepStrictEqual(type(new Int32Array()), Int32Array);
      deepStrictEqual(type(new Uint32Array()), Uint32Array);
      deepStrictEqual(type(new Uint8ClampedArray()), Uint8ClampedArray);
      deepStrictEqual(type(new Float32Array()), Float32Array);
      deepStrictEqual(type(new Float64Array()), Float64Array);
    });
  });

  describe('isTypedArray', () => {
    it('should work as expected', () => {
      strictEqual(isTypedArray(new Int8Array()), true);
      strictEqual(isTypedArray(new Uint8Array()), true);
      strictEqual(isTypedArray(new Int16Array()), true);
      strictEqual(isTypedArray(new Uint16Array()), true);
      strictEqual(isTypedArray(new Int32Array()), true);
      strictEqual(isTypedArray(new Uint32Array()), true);
      strictEqual(isTypedArray(new Uint8ClampedArray()), true);
      strictEqual(isTypedArray(new Float32Array()), true);
      strictEqual(isTypedArray(new Float64Array()), true);
    });
  });
});
